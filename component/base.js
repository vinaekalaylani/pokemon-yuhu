import { Row, Col } from "react-bootstrap";

export default function Base({ data }) {
  return (
    <div>
      <Row>
        <Col xs="3">
          <h6>HP </h6>
          <h6>Attack </h6>
          <h6>Defense </h6>
          <h6>Sp. Atk </h6>
          <h6>Sp. Def </h6>
          <h6>Speed </h6>
        </Col>
        <Col xs="9">
          {data?.stats.map((el, idx) => (
            <h6 key={idx}>:   {el.base_stat}</h6>
          ))}
        </Col>
      </Row>
    </div>
  );
}
