-- database name:  yspend
-- Create Users table
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

-- Create Categories table
CREATE TABLE Categories (
    cate_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    description TEXT
);

-- Create Recipes table
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

-- Create Finance_Links table
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

-- Create Plan_Component table
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

-- Create Notifications table
CREATE TABLE Notifications (
    noti_id SERIAL PRIMARY KEY,
    type VARCHAR(50),
    target_id INTEGER REFERENCES Users(user_id),
    title VARCHAR(100),
    image_url VARCHAR(255),
    content TEXT,
    time TIMESTAMP
);

-- Create Achievements table
CREATE TABLE Achievements (
    arch_id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    image_url VARCHAR(255),
    condition VARCHAR(100),
    description TEXT
);

-- Create Is_Archive table
CREATE TABLE Is_Archive (
    user_id INTEGER REFERENCES Users(user_id),
    arch_id INTEGER REFERENCES Achievements(arch_id),
    timestamp TIMESTAMP,
    PRIMARY KEY (user_id, arch_id)
);

-- Create Follower table
CREATE TABLE Follower (
    follower INTEGER REFERENCES Users(user_id),
    followee INTEGER REFERENCES Users(user_id),
    timestamp TIMESTAMP,
    PRIMARY KEY (follower, followee)
);

-- Create Post table
CREATE TABLE Post (
    post_id SERIAL PRIMARY KEY,
    author_id INTEGER REFERENCES Users(user_id),
    publish_date DATE,
    total_likes INTEGER,
    total_cmts INTEGER,
    content TEXT,
    image_url TEXT
);

-- Create Comments table
CREATE TABLE Comments (
    post_id INTEGER REFERENCES Post(post_id),
    user_id INTEGER REFERENCES Users(user_id),
    cmt_date TIMESTAMP,
    comment TEXT,
    PRIMARY KEY (post_id, user_id)
);

INSERT INTO Users (user_id, first_name, last_name, email, password_hash, birthday, avatar_url, setting_bits) VALUES
(1, 'Minh', 'Nguyen Tuan', 'minh.nguyentuan@example.com', '$1$N.K3f0GI$Dwe78Zorm5./5GQU9SeUG1', '1990-01-01', 'https://i.pravatar.cc/150?img=1', 15),
(2, 'Jane', 'Smith', 'jane.smith@example.com', '$1$N.K3f0GI$Dwe78Zorm5./5GQU9SeUG1', '1985-05-15', 'https://i.pravatar.cc/150?img=2', 10),
(3, 'Michael', 'Brown', 'michael.brown@example.com', '$1$N.K3f0GI$Dwe78Zorm5./5GQU9SeUG1', '1992-07-21', 'https://i.pravatar.cc/150?img=3', 20),
(4, 'Emily', 'Davis', 'emily.davis@example.com', '$1$N.K3f0GI$Dwe78Zorm5./5GQU9SeUG1', '1988-12-11', 'https://i.pravatar.cc/150?img=4', 5),
(5, 'David', 'Wilson', 'david.wilson@example.com', '$1$N.K3f0GI$Dwe78Zorm5./5GQU9SeUG1', '1995-03-30', 'https://i.pravatar.cc/150?img=5', 8);

INSERT INTO Categories (cate_id, name, description) VALUES
(1, 'Ăn uống', 'Chi phí bỏ ra để ăn uống'),
(2, 'Giải trí', 'Chi phí bỏ ra để giải trí'),
(3, 'Mua sắm', 'Chi phí bỏ ra để mua sắm'),
(4, 'Đi lại', 'Chi phí bỏ ra để đi lại'),
(5, 'Điện nước', 'Chi phí bỏ ra để trả tiền điện nước'),
(6, 'Lương', 'Lương'),
(7, 'Đầu tư', 'Chi phí bỏ ra để đầu tư'),
(8, 'Giáo dục', 'Chi phí bỏ ra để học tập');

INSERT INTO Post (post_id, author_id, publish_date, total_likes, total_cmts, content, image_url) VALUES
(1, 1, '2024-05-01', 0, 3, 'Thay vì ăn một ngày 3 bữa, mỗi bữa 50k, hãy ăn một ngày 4 bữa, mỗi bữa 30k. Bạn sẽ thấy mình ăn nhiều hơn, nhưng tiền bỏ ra lại ít đi :D', 'https://th.bing.com/th/id/OIP.rTaIj-BBeiXi3YexP1Z0JAHaEp?rs=1&pid=ImgDetMain'),
(2, 2, '2024-05-02', 0, 0, 'This is the second post content.', 'https://th.bing.com/th/id/OIP.rTaIj-BBeiXi3YexP1Z0JAHaEp?rs=1&pid=ImgDetMain');

INSERT INTO Comments (post_id, user_id, cmt_date, comment) VALUES
(1, 2, '2024-05-01 10:00:00', 'Nghe ảo vậy:)))'),
(1, 3, '2024-05-02 11:00:00', 'Very informative.'),
(1, 4, '2024-05-03 12:00:00', 'Thanks for sharing!');


INSERT INTO Achievements (arch_id, title, image_url, condition, description) VALUES
(1, 'Vua ăn sáng', 'https://placehold.co/400', 100000, 'Chi tiêu 100.000đ cho bữa sáng trong một tuần'),
(2, 'Vua ăn mày', 'https://placehold.co/400', 10000, 'Chi tiêu 10.000đ cho bữa sáng trong một tuần'),
(3, 'Người tối cổ', 'https://placehold.co/400', 0, 'Chi tiêu 0đ cho giải trí trong một tuần'),
(4, 'Không biết xài tiền', 'https://placehold.co/400', 3000000, 'Tổng chi tiêu 3.000.000đ trong một tháng');



INSERT INTO Finance_Links (id, owner_id, type, phone_num, issuer, card_number, expire_date, name) VALUES
(1, 1, 'Credit Card', '', 'Visa', '6219 8610 2888 8075', '2022-01-01', 'MINH NGUYEN TUAN'),
(2, 1, 'Debit Card', '', 'Visa', '6219 8610 2888 8075', '2024-11-30', 'BINANCE TEAM'),
(3, 1, 'E-wallet', '0123456789', 'Ví Momo', '', NULL, 'MINH NGUYEN TUAN'),
(4, 1, 'E-wallet', '0123456789', 'Zalo Pay', '', NULL, 'MINH NGUYEN TUAN'),
(5, 1, 'E-wallet', '0123456789', 'VNPay', '', NULL, 'MINH NGUYEN TUAN');

INSERT INTO Follower (follower, followee, timestamp) VALUES
(1, 2, '2024-05-20 10:00:00'),
(2, 3, '2024-05-21 11:00:00'),
(3, 1, '2024-05-22 12:00:00'),
(1, 3, '2024-05-23 13:00:00'),
(2, 1, '2024-05-24 14:00:00');

INSERT INTO Is_Archive (user_id, arch_id, timestamp) VALUES
(1, 1, '2024-05-01 10:00:00');

INSERT INTO Notifications (noti_id, type, target_id, title, image_url, content, time) VALUES
(1, 'Broadcast', NULL, 'Thông báo bảo trì', '', 'Hệ thống sẽ bảo trì vào tuần tới (chưa biết ngày nào).', '2024-05-26 10:00:00'),
(2, 'Target', 1, 'Thanh toán thành công', '', 'Hóa đơn tiền điện tháng 4/2024 đã được thanh toán', '2024-05-25 09:00:00'),
(3, 'Target', 1, 'Hóa đơn sắp tới', '', 'Sắp đến lúc thanh toán hóa đơn tiền điện nước tháng 5/2024', '2024-05-25 09:00:00'),
(4, 'Target', 1, 'Thanh toán thành công', '', 'Thanh toán Netflix tháng 4/2024', '2024-05-22 06:00:00'),
(5, 'Target', 1, 'Mở khóa thành tựu', '', 'Chúc mừng bạn mở khóa được thành tựu 10, tiêu ít hơn 500.000đ một tuần', '2024-05-22 06:00:00'),
(6, 'Target', 1, 'Cảnh báo chi tiêu', '', 'Sắp đạt ngưỡng chi tiêu tuần, còn lại 50.000đ cho chi tiêu trong tuần này.', '2024-05-22 06:00:00'),
(7, 'Target', 1, 'Gợi ý chi tiêu', '', 'Di chuyển bằng Grab sớm hơn 30 phút giúp tiết kiệm.', '2024-05-22 06:00:00'),
(8, 'Target', 1, 'Thanh toán thành công', '', 'Thanh toán hóa đơn CircleK qua ví Momo thành công.', '2024-05-22 06:00:00'),
(9, 'Broadcast', NULL, 'Cập nhật bản vá', '', 'Một lỗi nghiêm trọng vừa được phát hiện, vui lòng cập nhật bản vá khẩn cấp!!!!', '2024-05-22 06:00:00');

INSERT INTO Plan_Component (id, owner_id, type, week, month, year, limit_amount, color_hex, category_id) VALUES
(1, 1, 'Weekly', 1, NULL, NULL, 1250000, 'FF5733', 1),
(2, 1, 'Monthly', NULL, 2, NULL, 1250000, '33FF57', 2),
(3, 1, 'Monthly', NULL, 2, NULL, 1250000, '33FF57', 3),
(4, 1, 'Yearly', NULL, NULL, 2024, 1250000, '3357FF', 7),
(5, 1, 'Weekly', 2, NULL, NULL, 1250000, 'FF5733', 3),
(6, 2, 'Monthly', NULL, 3, NULL, 1250000, '57FF33', 2);


INSERT INTO Recipes (recipe_id, owner_id, avatar_url, recipe_name, status, to_vendor, category_id, image_url, amount) VALUES
(1, 1, 'https://th.bing.com/th/id/OIP.bTgoyhk0ZaoilosSUAw5yAHaHa?rs=1&pid=ImgDetMain', 'Lương 4/2024', 'Done', 'Google Company', 6, 'https://placehold.co/600x400', 1250000),
(2, 1, 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png', 'Thanh toán Netflix 4/2024', 'Done', 'Netflix', 2, 'https://placehold.co/600x400', 252000);

