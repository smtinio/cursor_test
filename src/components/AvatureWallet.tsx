import React, { useState } from "react";

type ActivityItem = {
  id: string;
  merchant: string;
  date: string;
  amount: string;
  status?: "pending" | "settled";
};

const activity: ActivityItem[] = [
  {
    id: "jaffa",
    merchant: "Jaffa Coffee Roasters",
    date: "Mar 1",
    amount: "$6.62",
    status: "pending"
  },
  {
    id: "fitness",
    merchant: "Fitness SF, Castro",
    date: "Mar 1",
    amount: "$109.95",
    status: "pending"
  },
  {
    id: "philmore",
    merchant: "Philmore Creamery",
    date: "Feb 28",
    amount: "$6.50"
  }
];

type ActiveSheet = "none" | "menu" | "deposit";

export const AvatureWallet: React.FC = () => {
  const [activeSheet, setActiveSheet] = useState<ActiveSheet>("none");
  const [depositSource, setDepositSource] = useState<"bank" | "card">("bank");
  const [transferSpeed, setTransferSpeed] = useState<"instant" | "standard">("standard");
  const [amount, setAmount] = useState<string>("");

  const openMoveMoney = () => setActiveSheet("menu");
  const closeSheet = () => setActiveSheet("none");

  const handleSelectQuickAmount = (value: number) => {
    setAmount(String(value));
  };

  return (
    <div className="wallet-shell">
      <div className="wallet-device" data-name="iPhone 16 Pro - 2" data-node-id="10:13">
        <header className="wallet-header">
          <div className="wallet-header-inner">
            <h1 className="wallet-title">Avature Wallet</h1>
            <button
              className="wallet-avatar"
              type="button"
              aria-label="Profile"
              data-node-id="10:17"
            />
          </div>
        </header>

        <main className="wallet-main">
          <section className="wallet-balance-card" aria-label="Balance card" data-node-id="10:18">
            <div className="wallet-balance-header">
              <span className="wallet-balance-label">Balance</span>
            </div>
            <div className="wallet-balance-amount">
              <span className="wallet-balance-major">$4,124</span>
              <span className="wallet-balance-minor">.23</span>
            </div>

            <div className="wallet-balance-actions" data-node-id="10:29">
              <button
                className="wallet-button wallet-button-medium wallet-button-primary"
                type="button"
                onClick={openMoveMoney}
              >
                Move money
              </button>
              <div className="wallet-divider" aria-hidden="true" />
              <button
                className="wallet-button wallet-button-medium wallet-button-ghost"
                type="button"
              >
                View card
              </button>
            </div>
          </section>

          <section className="wallet-section" aria-label="Recent activity" data-node-id="10:110">
            <div className="wallet-section-header">
              <h2 className="wallet-section-title">Recent Activity</h2>
              <button className="wallet-link-button" type="button">
                view all
              </button>
            </div>

            <ul className="wallet-activity-list">
              {activity.map((item) => (
                <li key={item.id} className="wallet-activity-row">
                  <div className="wallet-activity-info">
                    <div className="wallet-activity-merchant">{item.merchant}</div>
                    <div className="wallet-activity-date">{item.date}</div>
                  </div>
                  <div className="wallet-activity-meta">
                    <div className="wallet-activity-amount">{item.amount}</div>
                    {item.status && (
                      <div className="wallet-activity-status">{item.status}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="wallet-section" aria-label="More options" data-node-id="10:124">
            <div className="wallet-section-header">
              <h2 className="wallet-section-title">More</h2>
            </div>
            <div className="wallet-more-list">
              <button className="wallet-more-item" type="button">
                Settings
              </button>
              <button className="wallet-more-item" type="button">
                Get help
              </button>
            </div>
          </section>
        </main>

        <footer className="wallet-footer" aria-hidden="true" />
        {activeSheet !== "none" && (
          <div className="wallet-sheet-backdrop" role="presentation" onClick={closeSheet}>
            <div
              className="wallet-sheet"
              role="dialog"
              aria-modal="true"
              aria-label={activeSheet === "menu" ? "Move money" : "Deposit money"}
              onClick={(event) => event.stopPropagation()}
            >
              {activeSheet === "menu" ? (
                <>
                  <div className="wallet-sheet-header">
                    <h2 className="wallet-section-title">Move money</h2>
                    <button
                      type="button"
                      className="wallet-sheet-close"
                      aria-label="Close move money options"
                      onClick={closeSheet}
                    >
                      ×
                    </button>
                  </div>

                  <div className="wallet-sheet-actions">
                    <button
                      type="button"
                      className="wallet-button wallet-button-medium wallet-button-tertiary wallet-sheet-button"
                      onClick={() => setActiveSheet("deposit")}
                    >
                      Deposit money
                    </button>
                    <button
                      type="button"
                      className="wallet-button wallet-button-medium wallet-button-tertiary wallet-sheet-button"
                    >
                      Withdraw money
                    </button>
                    <button
                      type="button"
                      className="wallet-button wallet-button-medium wallet-button-tertiary wallet-sheet-button"
                    >
                      Deposit a check
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="wallet-sheet-header">
                    <button
                      type="button"
                      className="wallet-sheet-back"
                      aria-label="Back to move money options"
                      onClick={() => setActiveSheet("menu")}
                    >
                      ‹
                    </button>
                    <h2 className="wallet-section-title">Deposit money</h2>
                    <button
                      type="button"
                      className="wallet-sheet-close"
                      aria-label="Close deposit money"
                      onClick={closeSheet}
                    >
                      ×
                    </button>
                  </div>

                  <div className="wallet-sheet-body">
                    <section className="wallet-subsection">
                      <h3 className="wallet-subsection-title">From</h3>
                      <div className="wallet-list">
                        <button
                          type="button"
                          className="wallet-list-item"
                          onClick={() => setDepositSource("bank")}
                        >
                          <div>
                            <div className="wallet-list-title">Bank account</div>
                            <div className="wallet-list-subtitle">
                              Connect your bank to transfer from checking
                            </div>
                          </div>
                          <span
                            className={
                              depositSource === "bank"
                                ? "wallet-radio wallet-radio-selected"
                                : "wallet-radio"
                            }
                            aria-hidden="true"
                          />
                        </button>

                        <button
                          type="button"
                          className="wallet-list-item"
                          onClick={() => setDepositSource("card")}
                        >
                          <div>
                            <div className="wallet-list-title">Debit card</div>
                            <div className="wallet-list-subtitle">
                              Add a debit card for faster deposits
                            </div>
                          </div>
                          <span
                            className={
                              depositSource === "card"
                                ? "wallet-radio wallet-radio-selected"
                                : "wallet-radio"
                            }
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </section>

                    <section className="wallet-subsection">
                      <h3 className="wallet-subsection-title">Amount</h3>
                      <div className="wallet-amount-input">
                        <span className="wallet-amount-prefix">$</span>
                        <input
                          type="number"
                          inputMode="decimal"
                          min="0"
                          step="0.01"
                          className="wallet-amount-field"
                          placeholder="0"
                          value={amount}
                          onChange={(event) => setAmount(event.target.value)}
                        />
                      </div>
                      <div className="wallet-quick-amounts">
                        {[25, 50, 100].map((value) => (
                          <button
                            key={value}
                            type="button"
                            className={
                              amount === String(value)
                                ? "wallet-pill wallet-pill-selected"
                                : "wallet-pill"
                            }
                            onClick={() => handleSelectQuickAmount(value)}
                          >
                            ${value}
                          </button>
                        ))}
                      </div>
                    </section>

                    <section className="wallet-subsection">
                      <h3 className="wallet-subsection-title">Transfer speed</h3>
                      <div className="wallet-segmented">
                        <button
                          type="button"
                          className={
                            transferSpeed === "instant"
                              ? "wallet-segment-option wallet-segment-option-selected"
                              : "wallet-segment-option"
                          }
                          onClick={() => setTransferSpeed("instant")}
                        >
                          <div className="wallet-list-title">Instant</div>
                          <div className="wallet-list-subtitle">Arrives in minutes, fee applies</div>
                        </button>
                        <button
                          type="button"
                          className={
                            transferSpeed === "standard"
                              ? "wallet-segment-option wallet-segment-option-selected"
                              : "wallet-segment-option"
                          }
                          onClick={() => setTransferSpeed("standard")}
                        >
                          <div className="wallet-list-title">Standard</div>
                          <div className="wallet-list-subtitle">1–2 business days, no fee</div>
                        </button>
                      </div>
                    </section>

                    <button
                      type="button"
                      className="wallet-button wallet-button-medium wallet-button-primary wallet-sheet-cta"
                    >
                      Review deposit
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

