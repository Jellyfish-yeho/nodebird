import { Button, Form, Input } from "antd";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id); //로그인이 없으면 me가 없기 때문에 대비
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{position:'relative', margin: 0}}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
        />
        <Button style={{position:'absolute', right: 0, bottom: -40}} type="primary" htmlType="submit">
          삐약
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
