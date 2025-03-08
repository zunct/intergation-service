import { Injectable } from '@nestjs/common';
import { ServiceEndpointsService } from 'services/service-endpoints.service';
import axios, { AxiosRequestConfig } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ConnectionService {
  constructor(
    private serviceEndpointsService: ServiceEndpointsService,
    private readonly httpService: HttpService,
  ) {}
  async call(id: string, requestData: any): Promise<any> {
    const serviceEndpoint = await this.serviceEndpointsService.findOne(id);
    // Get the endpoint
    const { path, method, response_content_type, parameters: endpointParameters, service } = serviceEndpoint;
    //Get url
    const url = service.baseUrl + path;
    // Add parameters to the url
    const headers: Record<string, string> = {};
    headers['Content-Type'] = response_content_type;
    const body: Record<string, any> = {};
    const queryParams: Record<string, string> = {};
    // Xử lý các parameter
    endpointParameters.forEach((param) => {
      //Validate the request data
      if (param.required && !requestData[param.name]) {
        throw new Error(`Missing required parameter: ${param.name}`);
      }
      const dataType = typeof requestData[param.name];
      if (param.data_type !== dataType) {
        throw new Error(
          `Invalid data type for parameter ${param.name}.
           Expected ${param.data_type}, got ${dataType}`,
        );
      }

      if (param.type === 'header' && requestData[param.name]) {
        headers[param.name] = requestData[param.name];
      } else if (param.type === 'body' && requestData[param.name]) {
        body[param.name] = requestData[param.name];
      } else if (param.type === 'query' && requestData[param.name]) {
        queryParams[param.name] = requestData[param.name];
      }
    });

    const config: AxiosRequestConfig = {
      method,
      url,
      headers,
      params: queryParams,
      ...(method === 'POST' || method === 'PUT' ? { data: body } : {})
    };
    try {
      const response = await axios.request(config);
      return response.data;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'An unknown error occurred';
      throw new Error(`API Call Error: ${errorMessage}`);
    }
  }
}
