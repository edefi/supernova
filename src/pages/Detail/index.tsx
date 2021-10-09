import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Table } from "antd";
import { Link, useParams } from "react-router-dom";
import inch_logo from "../../assets/images/LwPtET72_400x400.jpeg";
import uni_logo from "../../assets/images/uni_logo.jpeg";
import piggy_logo from "../../assets/images/piggy_logo.jpeg";
import dodo_logo from "../../assets/images/dodo_logo.png";
import aave_logo from "../../assets/images/J1YJtvdI_400x400.jpeg";

const Detail: React.FC = ({}) => {
  const col = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "用户地址",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "净值",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "当前比例",
      dataIndex: "cur_rate",
      key: "cur_rate",
    },
    {
      title: "累计占比",
      dataIndex: "top_rate",
      key: "top_rate",
    },
    {
      title: "更新时间",
      dataIndex: "date",
      key: "date",
    },
  ];

  const data = [];
  const random = (x = 10) => Math.round(Math.random() * x);
  for (let i = 0; i < 20; i++) {

    const random10 = Math.round(Math.random() * 10);
    const random100 = Math.round(Math.random() * 100);
    data.push({
      key: i + 1,
      index: i + 1,
      address: `0x${random(1000)}q…${random(10000)}`,
      value: `$${random100},2${random10}4,${random(1000)}`,
      cur_rate: `${random(100)}.${random(100)}%`,
      top_rate: `${random(100)}.${random(100)}%`,
      date: `2021/10/${random10}  1${random(5)}:0${random(9)}`,
    });
  }

  const [logo, setLogo] = useState<any>();
  const [token, setToken] = useState<any>();
  const [url, setUrl] = useState<any>();

  let { name } = useParams<any>();

  useEffect(() => {
    if (name === "UNISWAP") {
      setLogo(uni_logo);
      setUrl("https://uniswap.org/");
    } else if (name === "1INCH") {
      setLogo(inch_logo);
      setUrl("https://app.1inch.io");
    } else if (name === "AAVE") {
      setLogo(aave_logo);
      setUrl("https://aave.com");
    } else if (name === "DODO") {
      setLogo(dodo_logo);
      setUrl("https://dodoex.io");
    } else if (name === "WEPIGGY") {
      setLogo(piggy_logo);
      setUrl("https://www.wepiggy.com");
    }
    setToken(name);
  }, [name]);
  return (
    <>
      <Header />
      <div className="detail-wrap">
        <div className="detail-box">
          <Link to="/">
            <i className="fas fa-angle-left" />
            <span style={{ marginLeft: 15 }}>协议详情</span>
          </Link>
          <div className="top-title flex items-center mt-12">
            <img className="toptitle-logo mr-4" src={logo} alt="" />
            <span className="toptital-name mr-12">{token}</span>
            <span className="detail-tag mr-2">DEX</span>
            <span className="detail-tag">AMM</span>
          </div>
          <div className="detail-sub flex">
            <a
              className="spliteline splitelinea flex"
              href={url}
              target="_blank"
            >
              {url}
            </a>
            <span className="spliteline flex">
              <span className="label-1">所在链</span>
              <span>Ethereum</span>
            </span>
            <span className="spliteline flex">
              <span className="label-1">平台币</span>
              <img className="logo label-1" src={logo} alt="" />
              <span>{token}</span>
            </span>
          </div>
          <div className="detail-sub flex">
            <span>
              <span className="label-1 e">上线时间</span>
              <span className="label-detail">2020/01/02</span>
            </span>
            <span className="ml-4">
              <span className="label-1 e">用户总数</span>
              <span className="label-detail">{'1'+random(10000)}</span>
            </span>
            <span className="ml-4">
              <span className="label-1 e">24小时用户数</span>
              <span className="label-detail">{random(3000)}</span>
            </span>
          </div>

          <div className="mt-20">
            <span className="s1 mr-8">用户存款</span>
            <span className="s2">{`$${random(100)},`+random(1000)}</span>
          </div>

          <div className="mt-4">
            <Table dataSource={data} columns={col} pagination={false} />
          </div>

          <div className="mt-10 grid gap-5">
            <div className=" flex items-center ">
              <span className="mr-4 label-1 e flex">Twitter热度:</span>
              <span className="flex gap-2 badge">
                <i className="fas fa-heart" />
                <i className="fas fa-heart" />
                <i className="fas fa-heart" />
              </span>
            </div>
            <div className=" flex items-center badge">
              <span className="mr-4 label-1 e flex">Telegram热度:</span>
              <span className="flex gap-2">
                <i className="fas fa-heart" />
                <i className="fas fa-heart" />
                <i className="fas fa-heart" />
                <i className="fas fa-heart" />
              </span>
            </div>
            <div className=" flex items-center">
              <span className="mr-4 label-1 e flex">Twitter情绪数据:</span>
              <a href="/">
                https://ipfs.io/ipfs/MrnPLzHJ7rjddh2MZxAQmZjA7Go4WyJGqVXcbuA5GRtrx8
              </a>
            </div>
            <div className=" flex items-center">
              <span className="mr-4 label-1 e flex">持币地址:</span>
              <a href="/">
                https://ipfs.io/ipfs/GRtrx8Qm7rjddh2MZxAXcbZjA7Go4WyJGqVzHJuAMrnPL5
              </a>
            </div>
            <div className=" flex items-center">
              <span className="mr-4 label-1 e flex">链上获利情况:</span>
              <a href="/">
                https://ipfs.io/ipfs/VzHJ7rjddbuAMrnPL5GRtrx8QmZjA7Go4WyJGqh2MZxAXc
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
