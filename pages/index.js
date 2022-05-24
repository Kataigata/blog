import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "reactive-dogs-101",
    title: "Reactive Dogs 101",
    image: "reactive-dogs-101.jpg",
    excerpt:
      "Reactive dogs are just dogs that are a little more scared or nervous than normal and thus overreact to other dogs, humans, mailboxes etc..",
    date: "2022-01-08",
  },
  {
    slug: "reactive-dogs-102",
    title: "Reactive Dogs 102",
    image: "reactive-dogs-101.jpg",
    excerpt:
      "Reactive dogs are just dogs that are a little more scared or nervous than normal and thus overreact to other dogs, humans, mailboxes etc..",
    date: "2022-01-08",
  },
  {
    slug: "reactive-dogs-103",
    title: "Reactive Dogs 103",
    image: "reactive-dogs-101.jpg",
    excerpt:
      "Reactive dogs are just dogs that are a little more scared or nervous than normal and thus overreact to other dogs, humans, mailboxes etc..",
    date: "2022-01-08",
  },
  {
    slug: "reactive-dogs-104",
    title: "Reactive Dogs 104",
    image: "reactive-dogs-101.jpg",
    excerpt:
      "Reactive dogs are just dogs that are a little more scared or nervous than normal and thus overreact to other dogs, humans, mailboxes etc..",
    date: "2022-01-08",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
