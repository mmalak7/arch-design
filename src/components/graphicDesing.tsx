import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useMousePoition from "../hooks/useMousePosition";

const GraphicDesing = () => {
  const { x, y } = useMousePoition();
  const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

  const projects = [
    {
      id: 1,
      subtitle: "Beach building",
      title: "Little time for relax",
      img: "arch1",
      strokeX: 0,
      strokeY: 180,
    },
    {
      id: 2,
      subtitle: "SD House",
      title: "For your best home mood",
      img: "arch2",
      strokeX: 350,
      strokeY: 300,
    },
    {
      id: 3,
      subtitle: "Office",
      title: "Open space feels better",
      img: "arch3",
      strokeX: -450,
      strokeY: 550,
    },
    {
      id: 4,
      subtitle: "Barcelona",
      title: "Most precious memories",
      img: "arch3",
      strokeX: 150,
      strokeY: 750,
    },
  ];

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={transition}
      className="container"
    >
      {projects.map((project) => (
        <Link
          to={`/model/${project.id}`}
          key={project.id}
          style={{ textDecoration: "none", color: "black", overflow: "hidden" }}
        >
          <Item
            key={project.title}
            id={project.id}
            title={project.title}
            img={project.img}
            x={x}
            y={y}
            strokeX={project.strokeX}
            strokeY={project.strokeY}
          />
        </Link>
      ))}
    </motion.div>
  );
};

const Item = ({
  id,
  title,
  img,
  x,
  y,
  strokeX,
  strokeY,
}: {
  id: number;
  title: string;
  img: string;
  x: any;
  y: any;
  strokeX: any;
  strokeY: any;
}) => {
  const [hoverState, setHoverState] = useState(false);
  const [listPosition, setListPosition] = useState<any>({
    top: 0,
    left: 0,
  });
  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setListPosition({
      top: list.current?.getBoundingClientRect().top,
      left: list.current?.getBoundingClientRect().left,
    });
  }, [hoverState]);

  return (
    <div>
      <div ref={list} className="element">
        <div className="element__projectNumber">
          <h4>{`00${id}`}</h4>
        </div>
        <motion.div
          onHoverStart={() => {
            setHoverState(true);
          }}
          onHoverEnd={() => {
            setHoverState(false);
          }}
          className="element__text"
        >
          <h1>{title}</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: hoverState ? 1 : 0,
            x: x - listPosition.top - strokeX,
            y: y - listPosition.left - strokeY,
          }}
          className="floating-image"
        >
          <img
            key={title}
            src={process.env.PUBLIC_URL + `/${img}.jpg`}
            alt={title}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default GraphicDesing;
