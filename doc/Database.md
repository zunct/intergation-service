### Database
CREATE TABLE services (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    name           VARCHAR(255) NOT NULL,
    key            VARCHAR(255) UNIQUE NOT NULL,
    description    TEXT DEFAULT NULL,
    image          VARCHAR(512) DEFAULT NULL,
    protocol_type  ENUM('http', 'https') NOT NULL,
    oauth_refresh_token_interval INT DEFAULT 0,
    deleted        BOOLEAN DEFAULT FALSE,
    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

