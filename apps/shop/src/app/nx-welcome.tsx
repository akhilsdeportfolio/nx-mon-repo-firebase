import React, { useState } from 'react';
import { Button, Drawer, Table } from 'antd';

const data = [
  { sno: 1, name: 'Akhil Kamsala', age: 24 },
  { sno: 2, name: 'Adarsh Kammara', age: 19 },
  { sno: 3, name: 'Priya Sharma', age: 22 },
  { sno: 4, name: 'Rahul Mehta', age: 28 },
  { sno: 5, name: 'Sneha Gupta', age: 21 },
  { sno: 6, name: 'Vikram Singh', age: 26 },
  { sno: 7, name: 'Riya Verma', age: 20 },
  { sno: 8, name: 'Karan Joshi', age: 27 },
  { sno: 9, name: 'Nisha Rao', age: 23 },
  { sno: 10, name: 'Suresh Patel', age: 30 },
  { sno: 11, name: 'Anjali Desai', age: 25 },
  { sno: 12, name: 'Kunal Nair', age: 29 },
  { sno: 13, name: 'Meera Bansal', age: 24 },
  { sno: 14, name: 'Deepak Kumar', age: 22 },
  { sno: 15, name: 'Pooja Yadav', age: 21 },
  { sno: 16, name: 'Rohit Joshi', age: 26 },
  { sno: 17, name: 'Tina Singh', age: 20 },
  { sno: 18, name: 'Amit Patil', age: 30 },
  { sno: 19, name: 'Neha Sethi', age: 27 },
  { sno: 20, name: 'Rajesh Reddy', age: 23 },
  { sno: 21, name: 'Kavita Mehta', age: 28 },
  { sno: 22, name: 'Aishwarya Rao', age: 24 },
  { sno: 23, name: 'Ravi Gupta', age: 22 },
  { sno: 24, name: 'Chaitanya Sharma', age: 21 },
  { sno: 25, name: 'Sheetal Joshi', age: 26 },
  { sno: 26, name: 'Nitin Malhotra', age: 29 },
  { sno: 27, name: 'Shruti Sinha', age: 24 },
  { sno: 28, name: 'Siddharth Yadav', age: 25 },
  { sno: 29, name: 'Isha Bansal', age: 23 },
  { sno: 30, name: 'Vivek Reddy', age: 27 },
  { sno: 31, name: 'Sonali Verma', age: 20 },
  { sno: 32, name: 'Aarav Singh', age: 28 },
  { sno: 33, name: 'Gaurav Mehta', age: 26 },
  { sno: 34, name: 'Hina Kapoor', age: 24 },
  { sno: 35, name: 'Karan Sharma', age: 25 },
  { sno: 36, name: 'Rekha Gupta', age: 22 },
  { sno: 37, name: 'Manish Desai', age: 29 },
  { sno: 38, name: 'Priti Nair', age: 21 },
  { sno: 39, name: 'Rajiv Bansal', age: 26 },
  { sno: 40, name: 'Sonal Joshi', age: 23 },
  { sno: 41, name: 'Alok Kumar', age: 27 },
  { sno: 42, name: 'Lata Singh', age: 30 },
  { sno: 43, name: 'Vinay Reddy', age: 24 },
  { sno: 44, name: 'Tanya Sethi', age: 25 },
  { sno: 45, name: 'Ranjan Mehta', age: 22 },
  { sno: 46, name: 'Kavya Yadav', age: 21 },
  { sno: 47, name: 'Yash Gupta', age: 26 },
  { sno: 48, name: 'Anil Joshi', age: 29 },
  { sno: 49, name: 'Snehal Bansal', age: 24 },
  { sno: 50, name: 'Rashmi Patil', age: 25 },
  { sno: 51, name: 'Dinesh Nair', age: 22 },
  { sno: 52, name: 'Nidhi Sinha', age: 21 },
  { sno: 53, name: 'Vikrant Kumar', age: 27 },
  { sno: 54, name: 'Aditi Mehta', age: 30 },
  { sno: 55, name: 'Ashish Reddy', age: 24 },
  { sno: 56, name: 'Ruchi Verma', age: 25 },
  { sno: 57, name: 'Sandeep Sharma', age: 22 },
  { sno: 58, name: 'Anupama Desai', age: 21 },
  { sno: 59, name: 'Prakash Yadav', age: 26 },
  { sno: 60, name: 'Ravi Nair', age: 29 },
  { sno: 61, name: 'Chandni Gupta', age: 24 },
  { sno: 62, name: 'Suraj Singh', age: 25 },
  { sno: 63, name: 'Pankaj Joshi', age: 22 },
  { sno: 64, name: 'Ritika Bansal', age: 21 },
  { sno: 65, name: 'Devendra Mehta', age: 26 },
  { sno: 66, name: 'Neelam Rao', age: 27 },
  { sno: 67, name: 'Ajay Reddy', age: 23 },
  { sno: 68, name: 'Rashmi Kumar', age: 28 },
  { sno: 69, name: 'Geeta Verma', age: 30 },
  { sno: 70, name: 'Ankush Sharma', age: 24 },
  { sno: 71, name: 'Maya Sethi', age: 25 },
  { sno: 72, name: 'Tarun Yadav', age: 22 },
  { sno: 73, name: 'Suman Bansal', age: 21 },
  { sno: 74, name: 'Diksha Nair', age: 26 },
  { sno: 75, name: 'Avinash Singh', age: 29 },
  { sno: 76, name: 'Kiran Patil', age: 24 },
  { sno: 77, name: 'Sonu Gupta', age: 25 },
  { sno: 78, name: 'Aman Joshi', age: 22 },
  { sno: 79, name: 'Vani Rao', age: 21 },
  { sno: 80, name: 'Siddharth Sharma', age: 26 },
  { sno: 81, name: 'Palak Singh', age: 27 },
  { sno: 82, name: 'Ravi Kumar', age: 30 },
  { sno: 83, name: 'Komal Mehta', age: 24 },
  { sno: 84, name: 'Harsh Yadav', age: 25 },
  { sno: 85, name: 'Payal Desai', age: 22 },
  { sno: 86, name: 'Naveen Reddy', age: 21 },
  { sno: 87, name: 'Riya Patel', age: 26 },
  { sno: 88, name: 'Yogesh Gupta', age: 29 },
  { sno: 89, name: 'Bhavna Nair', age: 24 },
  { sno: 90, name: 'Raghav Singh', age: 25 },
  { sno: 91, name: 'Vinita Bansal', age: 22 },
  { sno: 92, name: 'Neeraj Sharma', age: 21 },
  { sno: 93, name: 'Sakshi Joshi', age: 26 },
  { sno: 94, name: 'Aarav Patel', age: 27 },
  { sno: 95, name: 'Deepa Reddy', age: 30 },
  { sno: 96, name: 'Gurmeet Kaur', age: 24 },
  { sno: 97, name: 'Jaspreet Singh', age: 25 },
  { sno: 98, name: 'Krishna Yadav', age: 22 },
  { sno: 99, name: 'Kajal Desai', age: 21 },
  { sno: 100, name: 'Ashok Mehta', age: 26 },
];

const NxWelcome: React.FC = ({}) => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open drawer
      </Button>
      <Table
        dataSource={data}
        columns={[
          {
            key: 'sno',
            title: 'Serial No',
            render: (_, record) => <p>{record.sno}</p>,
          },
          { key: 'age', title: 'Age', render: (_, record) => record.age },
          {
            key: 'name',
            title: 'Display Name',
            render: (_, record) => record.name,
          },
        ]}
      />
      <Drawer
        title="Multi-level drawer"
        width={520}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Button type="primary" onClick={showChildrenDrawer}>
          Two-level drawer
        </Button>
        <Table
          dataSource={data}
          columns={[
            {
              key: 'sno',
              title: 'Serial No',
              render: (_, record) => <p>{record.sno}</p>,
            },
            { key: 'age', title: 'Age', render: (_, record) => record.age },
            {
              key: 'name',
              title: 'Display Name',
              render: (_, record) => record.name,
            },
          ]}
        />

        <Drawer
          title="Two-level Drawer"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          <Table
            dataSource={data}
            columns={[
              {
                key: 'sno',
                title: 'Serial No',
                render: (_, record) => <p>{record.sno}</p>,
              },
              { key: 'age', title: 'Age', render: (_, record) => record.age },
              {
                key: 'name',
                title: 'Display Name',
                render: (_, record) => record.name,
              },
            ]}
          />
        </Drawer>
      </Drawer>
    </>
  );
};

export default NxWelcome;
