import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Divider, Button, Input, Row } from "antd";

function DynamicField(props) {
  return (
    <Form.List name="fields">
      {(fields, { add, remove }) => {
        return (
          <div>
            {fields.map((field, index) => (
              <div key={field.key}>
                <Row align="middle" justify="space-between">
                  <Form.Item
                    name={[index, "name"]}
                    label={index === 0 ? "Name" : null}
                    labelCol={{ span: 24 }}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="nome" />
                  </Form.Item>
                  <Form.Item
                    name={[index, "amount"]}
                    label={index === 0 ? "Quantidade" : null}
                    labelCol={{ span: 24 }}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder="10" style={{ width: 80 }} />
                  </Form.Item>
                  {fields.length > 1 && index + 1 === fields.length ? (
                    <Button
                      type="danger"
                      className="dynamic-delete-button"
                      onClick={() => remove(field.name)}
                      icon={<MinusCircleOutlined />}
                    />
                  ) : null}
                </Row>
              </div>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                style={{ borderRadius: "8rem" }}
              >
                <PlusOutlined />
              </Button>
            </Form.Item>
          </div>
        );
      }}
    </Form.List>
  );
}

export default DynamicField;
