import React, { FC, useState, useContext } from "react";
import { Modal } from "antd";
import UserType from "~/utils/types/user";
import ModalForm from "@Components/ModalForm/ModalForm";
import { UsersDataContext } from "~/contexts/UsersData";
import { memo } from "react";

type IModalType = {
  user: UserType;
  isModalVisible: boolean;
  setIsModalVisible: (value: React.SetStateAction<boolean>) => void;
};

const IModal: FC<IModalType> = memo((props) => {
  const { user, isModalVisible = false, setIsModalVisible } = props;
  const [inputValues, setInputValues] = useState({ ...user });
  const { updateUser } = useContext(UsersDataContext);
  //eslint-disable-next-line
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    updateUser!(inputValues);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ModalForm inputValues={inputValues} setInputValues={setInputValues} />
      </Modal>
    </>
  );
});

export default IModal;
