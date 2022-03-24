import { Progress, Tabs, Timeline, Button } from "antd";
import CardItem from "../../components/card";
import QuickActionCard from "../../components/quickAcitonCard";
import { RightOutlined, DownOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

const Dashboard = () => {
  const callback = (key) => {
    console.log(key);
  };
  return (
    <div className="dashbord_container">
      <header className="main_content_header">
        <p>Hello Bennedict,</p>
      </header>

      <div className="card_container">
        <CardItem
          children={
            <div className="card_item_inner">
              <div className="card_item_top">
                <p className="card_item_accountTitle">Avaliable Balance</p>

                <div className="card_item_top_right">
                  <div id="tier1">Tier 1</div>
                </div>
              </div>
              <div className="card_item_middle">
                {/* naria symbol */}
                <p id="naria">{"\u20A6"}</p>
                <h2>6,390.68</h2>
                <span>
                  <img
                    src={require("../../assets/images/big_hideP.svg").default}
                    alt="hide"
                  />
                </span>
              </div>
            </div>
          }
          bgColor="account"
        />

        <CardItem
          children={
            <div className="card_item_inner">
              <div className="card_item_top">
                <p className="card_item_gray">Car Purchase Plan</p>

                <div className="card_item_top_right">
                  <p>75% Achieved</p>
                  <Progress
                    type="circle"
                    percent={75}
                    size="small"
                    showInfo={false}
                    strokeColor={"#0047CC"}
                  />
                </div>
              </div>
              <div className="card_item_middle">
                {/* naria symbol */}
                <p id="naria">{"\u20A6"}</p>
                <h2>6,390.68</h2>
                <span>
                  <img
                    src={require("../../assets/images/hideP.svg").default}
                    alt="hide"
                  />
                </span>
              </div>

              <span className="card_item_gray">
                Interest as at today: : ₦20,000
              </span>
            </div>
          }
          bgColor="purchase"
        />
        <CardItem
          children={
            <div className="card_item_inner">
              <div className="card_item_top">
                <p className="card_item_gray">Birthday Plan</p>

                <div className="card_item_top_right">
                  <p>75% Achieved</p>
                  <Progress
                    type="circle"
                    percent={75}
                    size="small"
                    showInfo={false}
                    strokeColor={"#0047CC"}
                  />
                </div>
              </div>
              <div className="card_item_middle">
                {/* naria symbol */}
                <p id="naria">{"\u20A6"}</p>
                <h2>6,390.68</h2>
                <span>
                  <img
                    src={require("../../assets/images/hideP.svg").default}
                    alt="hide"
                  />
                </span>
              </div>

              <span className="card_item_gray">
                Interest as at today: : ₦20,000
              </span>
            </div>
          }
          bgColor="birthday"
        />
      </div>

      <section className="mini_content">
        {/* recent transaction */}
        <div className="transaction_container">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Spending  Account" key="1">
              <div id="recent_transaction">
                <p className="title">Recent Transaction</p>

                <div id="recent_transaction_header">
                  <Tabs
                    defaultActiveKey="1"
                    onChange={callback}
                    className="recent_trans_tabs"
                  >
                    <TabPane tab="All" key="1"></TabPane>
                    <TabPane tab="Debit" key="2"></TabPane>
                    <TabPane tab="Credit" key="3"></TabPane>
                  </Tabs>

                  {/* calendar dropdown */}
                  <div className="recent_trans_calendar">
                    <span>
                      <img
                        src={
                          require("../../assets/images/calendar.svg").default
                        }
                        alt="calendar"
                      />
                    </span>
                    <p>Past 30 Days</p>
                    <DownOutlined />
                  </div>
                </div>

                <Timeline className="recent_timeline" mode="left">
                  <Timeline.Item label={<p>Today</p>}>
                    {/* loop through an array and render this */}
                    <div className="timeline_row">
                      <div>
                        {/* icon */}
                        <div>
                          <span>Paid for</span>
                          <p>Netflix</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="timeline_row_debit">
                          <span>{"\u20A6"}</span>
                          -3,000.00
                        </h3>
                        <p className="timeline_row_amount">
                          <span>{"\u20A6"}</span> 300,000
                        </p>
                      </div>
                    </div>
                    <div className="timeline_row">
                      <div>
                        {/* icon */}
                        <div>
                          <span>Recieved From</span>
                          <p>Ayoola Adeniji</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="timeline_row_debit">
                          <span>{"\u20A6"}</span>
                          +3,000.00
                        </h3>
                        <p className="timeline_row_amount">
                          <span>{"\u20A6"}</span> 300,000
                        </p>
                      </div>
                    </div>

                    <div className="timeline_row">
                      <div>
                        {/* icon */}
                        <div>
                          <span>Paid for</span>
                          <p>Netflix</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="timeline_row_debit">
                          <span>{"\u20A6"}</span>
                          -3,000.00
                        </h3>
                        <p className="timeline_row_amount">
                          <span>{"\u20A6"}</span> 300,000
                        </p>
                      </div>
                    </div>
                    <div className="timeline_row">
                      <div>
                        {/* icon */}
                        <div>
                          <span>Recieved From</span>
                          <p>Ayoola Adeniji</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="timeline_row_debit">
                          <span>{"\u20A6"}</span>
                          +3,000.00
                        </h3>
                        <p className="timeline_row_amount">
                          <span>{"\u20A6"}</span> 300,000
                        </p>
                      </div>
                    </div>
                  </Timeline.Item>

                  <Timeline.Item label={<p>Sept 18</p>}>
                    <div className="timeline_row">
                      <div>
                        {/* icon */}
                        <div>
                          <span>Paid for</span>
                          <p>Netflix</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="timeline_row_debit">
                          <span>{"\u20A6"}</span>
                          -3,000.00
                        </h3>
                        <p className="timeline_row_amount">
                          <span>{"\u20A6"}</span> 300,000
                        </p>
                      </div>
                    </div>
                  </Timeline.Item>
                  <Timeline></Timeline>
                </Timeline>

                <div className="btn_transaction">
                  <Button className="btn">View All Transactions</Button>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Linked accounts" key="2">
              Content of Tab Panel 2
            </TabPane>
          </Tabs>
        </div>

        {/* quick action */}
        <div className="quickAction_container">
          <p>Quick Actions</p>

          <div className="quickAction_cardWrapper">
            <div className="row">
              <QuickActionCard
                children={
                  <>
                    <span>
                      <img
                        src={
                          require("../../assets/images/send_money.svg").default
                        }
                        alt="send money"
                      />
                    </span>
                    <p>Send Money</p>
                  </>
                }
                last={false}
              />
              <QuickActionCard
                children={
                  <>
                    <span>
                      <img
                        src={
                          require("../../assets/images/fund_account.svg")
                            .default
                        }
                        alt="fund account"
                      />
                    </span>
                    <p>Fund Account</p>
                  </>
                }
                last={true}
              />
            </div>

            <div className="row">
              <QuickActionCard
                children={
                  <>
                    <span>
                      <img
                        src={
                          require("../../assets/images/buy_airtime.svg").default
                        }
                        alt="buy airtime"
                      />
                    </span>
                    <p>Buy Airtime</p>
                  </>
                }
                last={false}
              />
              <QuickActionCard
                children={
                  <>
                    <span>
                      <img
                        src={
                          require("../../assets/images/money_bills.svg").default
                        }
                        alt="pay bills"
                      />
                    </span>
                    <p>Pay Bills</p>
                  </>
                }
                last={true}
              />
            </div>
            <div className="row">
              <QuickActionCard
                children={
                  <>
                    <span>
                      <img
                        src={
                          require("../../assets/images/save_money.svg").default
                        }
                        alt="save money"
                      />
                    </span>
                    <p>Save Money</p>
                  </>
                }
                last={false}
              />
              <QuickActionCard
                children={
                  <>
                    <span>
                      <img
                        src={
                          require("../../assets/images/cashback.svg").default
                        }
                        alt="cash back"
                      />
                    </span>
                    <p>Cashback</p>
                  </>
                }
                last={true}
              />
            </div>
            <div className="quickAction_upgrade">
              <p>Upgrade your account</p>

              <div className="quickAction_upgrade_btext">
                <span>
                  Upgrade your account to increase your account limits.
                </span>
                {/* 1.875rem */}
                <RightOutlined id="quickction_upgrade_icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
