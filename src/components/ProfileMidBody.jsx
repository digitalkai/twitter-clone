import { useContext, useEffect } from "react";
import { Button, Col, Image, Nav, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "./AuthProvider";
import ProfilePostCard from "./ProfilePostCard";
import { fetchPostsByUser } from "../features/posts/postsSlice";

export default function ProfileMidBody() {

    const url = "https://pbs.twimg.com/profile_banners/156044998/1508638679/1500x500";
    const pic = "https://pbs.twimg.com/profile_images/1331475974228086785/Xaf2U-gq_400x400.jpg";

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts.posts);
    const loading = useSelector((state) => state.posts.loading);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        dispatch(fetchPostsByUser(currentUser.uid));
    }, [dispatch, currentUser]);

    return (
        <Col sm={6} className="bg-light" style={{ border: "1px solid lightgrey" }}>
            <Image src={url} fluid />
            <br />
            <Image
                src={pic}
                roundedCircle
                style={{
                    width: 150,
                    position: "absolute",
                    top: "140px",
                    border: "4px solid #F8F9FA",
                    marginLeft: 15,
                }}
            />

            <Row className="justify-content-end">
                <Col xs="auto">
                    <Button className="rounded-pill mt-2" variant="outline-secondary">
                        Edit Profile
                    </Button>
                </Col>
            </Row>

            <p className="mt-5" style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}>
                Sia
            </p>

            <p style={{ marginBottom: "2px" }}>@digitalkai</p>

            <p>I shitpost</p>
            <p>Investor</p>
            <p>
                <strong>69</strong> Following <strong>420</strong> Followers
            </p>

            <Nav variant="underline" defaultActiveKey="/home" justify>
                <Nav.Item>
                    <Nav.Link eventKey="/home">Tweets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Replies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Highlights</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Media</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Likes</Nav.Link>
                </Nav.Item>
            </Nav>
            {loading && (
                <Spinner animation="border" className="ms-3 mt-3" variant="primary" />
            )}
            {posts.map((post) => (

                <ProfilePostCard key={post.id} post={post} />
            ))}


        </Col>
    );

}