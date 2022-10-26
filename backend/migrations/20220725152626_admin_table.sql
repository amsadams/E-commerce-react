-- +goose Up
-- +goose StatementBegin
CREATE TABLE IF NOT EXISTS admin(
      id BIGSERIAL PRIMARY KEY,
      first_name VARCHAR(200) NOT NULL,
      last_name VARCHAR(200) NOT NULL,
      password VARCHAR(200) NOT NULL,
      email VARCHAR(200) NOT NULL,
      phone_number BIGINT,
      created_at TIMESTAMP DEFAULT NOW()
   );
INSERT INTO admin (first_name, last_name, password, email, phone_number)
VALUES ('Anandu', 'Shimon', '5f4dcc3b5aa765d61d8327deb882cf99', 'anandu.email@gmail.com', 7025648964);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
-- DROP TABLE IF EXISTS admin;
-- +goose StatementEnd
