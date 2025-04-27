import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const Marks = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  const marks = marksData.map((mark) => {
    const student = {
      id: mark.id,
      name: mark.name,
      physics: mark.marks.physics,
      chemistry: mark.marks.chemistry,
      maths: mark.marks.math,
    };
    const avg = (student.physics + student.chemistry + student.maths) / 3;
    student.avg = avg;
    return student;
  });
  return (
    <div>
      <BarChart width={500} height={300} data={marks}>
        <XAxis dataKey='name'></XAxis>
        <YAxis></YAxis>
        <Bar dataKey='avg' fill="yellow"></Bar>
        <Bar dataKey='chemistry' fill="blue"></Bar>
      </BarChart>
    </div>
  );
};

export default Marks;
