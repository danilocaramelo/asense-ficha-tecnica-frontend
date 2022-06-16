import React, { useEffect, useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Button, Input, Row, Select, Col, Typography } from "antd";
import { getSupplies } from "../../connection/supplies";
import "./styles.scss";

function DynamicField(props) {
  const [supplyList, setSupplyList] = useState([]);
  async function fetchSupplies() {
    const response = await getSupplies();
    setSupplyList(response.data);
  }
  useEffect(() => {
    fetchSupplies();
  }, []);

  const { Option } = Select;
  const { Text } = Typography;

  return (
    <div className="dynamic-fields">
      <Text className="supplies-label">Insumos: </Text>
      <Form.List
        name="insumos"
      >
        {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <div key={field.key}>
                  <Row align="top">
                    <Col span={14} offset={1}>
                      <Form.Item
                        name={[index, "insumo"]}
                        label={index === 0 ? "Name" : null}
                        labelCol={{ span: 24 }}
                        rules={[
                          { required: true, message: "campo obrigatório" },
                        ]}
                      >
                        <Select size="large">
                          {supplyList.map((item) => (
                            <Option value={item.id}>{item.nome}</Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={5} offset={1}>
                      <Form.Item
                        name={[index, "quantidade"]}
                        label={index === 0 ? "Quantidade" : null}
                        labelCol={{ span: 24 }}
                        rules={[
                          { required: true, message: "campo obrigatório" },
                        ]}
                      >
                        <Input size="large" placeholder="10" />
                      </Form.Item>
                    </Col>
                    <Col span={1} offset={1}>
                      {fields.length > 1 && index + 1 === fields.length ? (
                        <Button
                          type="danger"
                          className="minus-supply"
                          onClick={() => remove(field.name)}
                          icon={<MinusCircleOutlined />}
                        />
                      ) : null}
                    </Col>
                  </Row>
                </div>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  className="plus-supply"
                >
                  <PlusOutlined />
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>
    </div>
  );
}

export default DynamicField;
