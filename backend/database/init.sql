CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    password_hash VARCHAR(255),
    birthday DATE,
    avatar_url VARCHAR(255),
    setting_bits INTEGER
);

COPY Users
FROM '/dataset/users.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE Categories (
    cate_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    description TEXT
);

COPY Categories
FROM '/dataset/categories.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE Recipes (
    recipe_id SERIAL PRIMARY KEY,
    owner_id INTEGER REFERENCES Users(user_id),
    avatar_url VARCHAR(255),
    recipe_name VARCHAR(100),
    status VARCHAR(50),
    to_vendor VARCHAR(50),
    category_id INTEGER REFERENCES Categories(cate_id),
    image_url VARCHAR(255),
    amount INTEGER
);

COPY Recipes
FROM '/dataset/recipes.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE Finance_Links (
    id SERIAL PRIMARY KEY,
    owner_id INTEGER REFERENCES Users(user_id),
    type VARCHAR(50),
    phone_num VARCHAR(20),
    issuer VARCHAR(50),
    card_number VARCHAR(20),
    expire_date DATE,
    name VARCHAR(100)
);

COPY Finance_Links
FROM '/dataset/finance_links.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE Plan_Component (
    id SERIAL PRIMARY KEY,
    owner_id INTEGER REFERENCES Users(user_id),
    type VARCHAR(50),
    week INTEGER,
    month INTEGER,
    year INTEGER,
    limit_amount INTEGER,
    color_hex VARCHAR(7),
    category_id INTEGER REFERENCES Categories(cate_id)
);

COPY Plan_Component
FROM '/dataset/plan_component.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE Notifications (
    noti_id SERIAL PRIMARY KEY,
    type VARCHAR(50),
    target_id INTEGER REFERENCES Users(user_id),
    title VARCHAR(100),
    image_url VARCHAR(255),
    content TEXT,
    time TIMESTAMP
);

COPY Notifications
FROM '/dataset/notifications.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE Achievements (
    arch_id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    image_url VARCHAR(255),
    condition VARCHAR(100),
    description TEXT
);

COPY Achievements
FROM '/dataset/achievements.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE Is_Archive (
    user_id INTEGER REFERENCES Users(user_id),
    arch_id INTEGER REFERENCES Achievements(arch_id),
    timestamp TIMESTAMP,
    PRIMARY KEY (user_id, arch_id)
);

COPY Is_Archive
FROM '/dataset/is_archive.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE Follower (
    follower INTEGER REFERENCES Users(user_id),
    followee INTEGER REFERENCES Users(user_id),
    timestamp TIMESTAMP,
    PRIMARY KEY (follower, followee)
);

COPY Follower
FROM '/dataset/follower.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE Post (
    post_id SERIAL PRIMARY KEY,
    author_id INTEGER REFERENCES Users(user_id),
    publish_date DATE,
    total_likes INTEGER,
    total_cmts INTEGER,
    content TEXT
);

COPY Post
FROM '/dataset/post.csv'
DELIMITER ','
CSV HEADER;

CREATE TABLE Comments (
    post_id INTEGER REFERENCES Post(post_id),
    user_id INTEGER REFERENCES Users(user_id),
    cmt_date TIMESTAMP,
    comment TEXT,
    PRIMARY KEY (post_id, user_id)
);

COPY Comments
FROM '/dataset/comments.csv'
DELIMITER ','
CSV HEADER;