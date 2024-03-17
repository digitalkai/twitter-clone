import { Button, Col, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function ProfilePostCard({ content, postId }) {
    const [likes, setLikes] = useState(0);
    const pic = "https://pbs.twimg.com/profile_images/1331475974228086785/Xaf2U-gq_400x400.jpg";

    useEffect(() => {
        fetch(
            `https://b888efc5-bd83-4588-9d6a-bdf792c88857-00-22ewf6kwxier7.riker.repl.co/likes/post/${postId}`
        )
            .then((response) => response.json())
            .then((data) => setLikes(data.length))
            .catch((error) => console.error("Error:", error));
    }, [postId]);

    return (
        <Row
            className="p-3"
            style={{
                borderTop: "1px solid #D3D3D3",
                borderBottom: "1px solid #D3D3D3"
            }}
        >
            <Col sm={1}>
                <Image src={pic} fluid roundedCircle />
            </Col>

            <Col>
                <strong>Sia</strong>
                <span> @digitalkai - Mar 14</span>
                <p>{content}</p>
                <div className="d-flex justify-content-between">
                    <Button variant="light">
                        <i className="bi bi-chat"></i>
                    </Button>
                    <Button variant="light">
                        <i className="bi bi-repeat"></i>
                    </Button><Button variant="light">
                        <i className="bi bi-heart"> {likes}</i>
                    </Button><Button variant="light">
                        <i className="bi bi-graph-up"></i>
                    </Button><Button variant="light">
                        <i className="bi bi-upload"></i>
                    </Button>

                </div>
            </Col>
        </Row>
    )
}