import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Table } from "antd";
import { Link, useParams } from "react-router-dom";
import inch_logo from "../../assets/images/LwPtET72_400x400.jpeg";
import uni_logo from "../../assets/images/uni_logo.jpeg";
import piggy_logo from "../../assets/images/piggy_logo.jpeg";
import dodo_logo from "../../assets/images/dodo_logo.png";
import aave_logo from "../../assets/images/J1YJtvdI_400x400.jpeg";
import heat from "../../assets/images/icons/heat.svg";
import heat_active from "../../assets/images/icons/heat_active.svg";
import eth from "../../assets/images/eth.svg";
import {useTranslation} from 'react-i18next';

const Detail: React.FC = ({}) => {
  const {t,i18n} = useTranslation()
  const col: any = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      align: "center",
      render: function (text: any) {
        return <div className="cell-td">{text}</div>;
      },
    },
    {
      title() {
        return t('USER')
      },
      dataIndex: "address",
      key: "address",
      align: "center",
      render: function (text: any) {
        return <div className="cell-td">{text}</div>;
      },
    },
    {
      title() {
        return t('NET WORTH')
      },
      dataIndex: "value",
      key: "value",
      align: "center",
      render: function (text: any) {
        return <div className="cell-td">{text}</div>;
      },
    },
    {
      title() {
        return t('SHARE')
      },
      dataIndex: "cur_rate",
      key: "cur_rate",
      align: "center",
      render: function (text: any) {
        return <div className="cell-td">{text}</div>;
      },
    },
    {
      title() {
        return t('CUMULATIVE SHARE')
      },
      dataIndex: "top_rate",
      key: "top_rate",
      align: "center",
      render: function (text: any) {
        return <div className="cell-td">{text}</div>;
      },
    },
    {
      title() {
        return t('UPDATED AT')
      },
      dataIndex: "date",
      key: "date",
      align: "center",
      render: function (text: any) {
        return <div className="cell-td">{text}</div>;
      },
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
      date: `2021/10/0${random(9)}  1${random(5)}:0${random(9)}`,
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
    <div style={{paddingBottom: 80}}>
      <Header />
      <div className="detail-wrap">
        <div className="detail-box">
          <div className="p50">
            <Link to="/" className="flex items-center">
              <i className="fas fa-angle-left" style={{fontSize: 16}}/>
              <span style={{ marginLeft: 15 }}>{t('Protocol Detail')}</span>
            </Link>
            <div className="top-title flex items-center mt-12">
              <img className="toptitle-logo mr-4" src={logo} alt="" />
              <span className="toptital-name mr-12">{token}</span>
              <span className="detail-tag mr-2">DEX</span>
              <span className="detail-tag">AMM</span>
            </div>
            <div className="detail-sub flex items-center">
              <a
                className="spliteline splitelinea flex items-center"
                href={url}
                target="_blank"
              >
                {url}
              </a>
              <span className="spliteline flex items-center">
                <span className="label-1">{t('On the chain')}</span>
                <img className="label-1" src={eth} alt=""/>
                <span>Ethereum</span>
              </span>
              <span className="spliteline flex items-center">
                <span className="label-1">{t('Platform token')}</span>
                <img className="logo label-1" src={logo} alt="" />
                <span>{token}</span>
              </span>
            </div>
            <div className="detail-sub flex">
              <span>
                <span className="label-1 e">{t('Genesis date')}</span>
                <span className="label-detail">2020/01/02</span>
              </span>
              <span className="ml-4">
                <span className="label-1 e">{t('Total users')}</span>
                <span className="label-detail">{"1" + random(10000)}</span>
              </span>
              <span className="ml-4">
                <span className="label-1 e">{t('24h Users')}</span>
                <span className="label-detail">{random(3000)}</span>
              </span>
            </div>

            <div className="mt-20">
              <span className="s1 mr-8">{t('User deposits')}</span>
              <span className="s2">{`$${random(100)},` + random(1000)}</span>
            </div>
          </div>
          <div className="table-box mt-4">
            <Table
              className="table-wrap"
              dataSource={data}
              columns={col}
              pagination={false}
              rowClassName="table-row"
            />
          </div>

          <div className="mt-10 grid gap-5 p50 mb-10">
            <div className="flex mb-10">
              <div className="mr-10 flex items-center ">
                <i className="label-1-icon fab fa-twitter" />
                <span className="mr-4 label-1 e flex">{t('Twitter Heat')}:</span>
                <span className="flex gap-2 badge">
                <img src={heat_active} />
                <img src={heat_active} />
                <img src={heat_active} />
                <img src={heat_active} />
                <img src={heat} alt=""/>
              </span>
              </div>
              <div className=" flex items-center badge">
                <i className="label-1-icon fab fa-telegram-plane" />
                <span className="mr-4 label-1 e flex">{t('Telegram Heat')}:</span>
                <span className="flex gap-2">
                <img src={heat_active} />
                <img src={heat_active} />
                <img src={heat_active} />
                <img src={heat} />
                <img src={heat} alt=""/>
              </span>
              </div>
            </div>

            <div className="data items-center">
              <div className="mr-4 label-1 e">{t('Twitter Sentiment Data')}</div>
              <a className="" href="/">
                https://ipfs.io/ipfs/MrnPLzHJ7rjddh2MZxAQmZjA7Go4WyJGqVXcbuA5GRtrx8
              </a>
            </div>
            <div className="data items-center">
              <div className="mr-4 label-1 e">{t('Holders Address')}</div>
              <a href="/">
                https://ipfs.io/ipfs/GRtrx8Qm7rjddh2MZxAXcbZjA7Go4WyJGqVzHJuAMrnPL5
              </a>
            </div>
            <div className="data items-center">
              <div className="mr-4 label-1 e">{t('Profitability On The Chain')}</div>
              <a href="/">
                https://ipfs.io/ipfs/VzHJ7rjddbuAMrnPL5GRtrx8QmZjA7Go4WyJGqh2MZxAXc
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
