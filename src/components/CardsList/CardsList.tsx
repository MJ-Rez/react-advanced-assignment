import React, { FC, memo, useContext } from "react";
import Card from "@Components/Card/Card";
import { Col, Row } from "antd";
import styles from "./CardsList.module.css";
import { UsersDataContext } from "~/contexts/UsersData";
import LoadingIndicator from "@Components/Loading/Loading";

const CardsList: FC = memo(() => {
  const { users, isLoading } = useContext(UsersDataContext);

  return (
    <div className={styles.cardlist_container}>
      {isLoading && <LoadingIndicator />}
      <Row className="row" wrap>
        {users!.map((user) => (
          <Col
            className={`${styles.col} ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-8 ant-col-xl-6`}
            xs={24}
            sm={24}
            md={8}
            lg={8}
            xl={6}
            key={user.id}
          >
            <Card user={user} />
          </Col>
        ))}
      </Row>
    </div>
  );
});

export default CardsList;
