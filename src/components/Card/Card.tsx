import React, { FC, useState, useContext } from "react";
import { UsersDataContext } from "~/contexts/UsersData";
import styles from "./Card.module.css";
import {
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  HeartFilled,
  DeleteFilled,
} from "@ant-design/icons";
import { Card as CardofAntd } from "antd";
import UserType from "~/utils/types/user";
import IModal from "@Components/Modal/IModal";
import { memo } from "react";

type CardType = {
  user: UserType;
};

const Card: FC<CardType> = memo(({ user }) => {
  const { deleteUser } = useContext(UsersDataContext);
  const [liked, setLiked] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <CardofAntd
        className={`${styles.CardofAntd}`}
        cover={<img alt="example" src={user.avatar} />}
        actions={[
          liked ? (
            <HeartFilled
              style={{ color: "red", fontSize: "20px" }}
              onClick={() => setLiked((prev) => !prev)}
            />
          ) : (
            <HeartOutlined
              style={{ color: "red", fontSize: "20px" }}
              onClick={() => setLiked((prev) => !prev)}
            />
          ),
          <EditOutlined key="edit" onClick={() => setIsModalVisible(true)} />,
          <DeleteFilled onClick={() => deleteUser!(user.id)} />,
        ]}
      >
        <div className={`${styles.card_info}`}>
          <h3>{user.name}</h3>
          <div className={`${styles.card_contact_info}`}>
            <MailOutlined />
            <p>{user.email}</p>
          </div>
          <div className={`${styles.card_contact_info}`}>
            <PhoneOutlined />
            <p>{user.phone}</p>
          </div>
          <div className={`${styles.card_contact_info}`}>
            <GlobalOutlined />
            <p>{user.website}</p>
          </div>
        </div>
      </CardofAntd>
      <IModal
        user={user}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
});

export default Card;
