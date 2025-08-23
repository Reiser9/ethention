"use client";

import React from "react";
import Image from "next/image";
import cn from "classnames";

import styles from "./page.module.css";
import base from "@/shared/styles/base.module.css";

import {
    ArrowRight,
    Blind,
    Change,
    Close,
    Copy,
    Dollar,
    Eth,
    Fire,
    Gift,
    Swap,
    Wallet,
    Wallet2,
} from "@/shared/icons";
import { Modal } from "@/shared/ui/Modal";

export default function Home() {
    const [upgradeModal, setUpgradeModal] = React.useState(false);
    const [syncModal, setSyncModal] = React.useState(false);
    const [connectModal, setConnectModal] = React.useState(false);

    return (
        <>
            <div className={styles.app}>
                <div className={styles.appBg}>
                    <Image src="/img/main-bg.png" alt="bg" fill />
                </div>

                <header className={styles.header}>
                    <div className={base.container}>
                        <div className={styles.headerInner}>
                            <div className={styles.headerLogo}>
                                <Image
                                    src="/img/logo.png"
                                    alt="Logo"
                                    width={44}
                                    height={44}
                                />
                                Ethention
                            </div>

                            <button
                                className={styles.headerButton}
                                onClick={() => setConnectModal(true)}
                            >
                                Connect Wallet
                                <span>
                                    <ArrowRight />
                                </span>
                            </button>
                        </div>
                    </div>
                </header>

                <div className={styles.appDashboard}>
                    <div className={base.container}>
                        <div className={styles.appDashboardInner}>
                            <div className={styles.appDashboardWrap}>
                                <div className={styles.appDashboardInfoWrap}>
                                    <div className={styles.appDashboardInfo}>
                                        <div
                                            className={
                                                styles.appDashboardInfoBlock
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Swap />
                                                </div>
                                                Transactions: <span>523</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Gift />
                                                </div>
                                                Gifts: <span>0.41 ETH</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Dollar />
                                                </div>
                                                Users: <span>0.41 ETH</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Dollar />
                                                </div>
                                                Gifts: <span>0.41 ETH</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Dollar />
                                                </div>
                                                Gifts: <span>0.41 ETH</span>
                                            </div>
                                        </div>

                                        <div
                                            className={
                                                styles.appDashboardInfoBlock
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Swap />
                                                </div>
                                                Transactions: <span>523</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Gift />
                                                </div>
                                                Gifts: <span>0.41 ETH</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Dollar />
                                                </div>
                                                Users: <span>0.41 ETH</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Dollar />
                                                </div>
                                                Gifts: <span>0.41 ETH</span>
                                            </div>

                                            <div
                                                className={
                                                    styles.appDashboardInfoItem
                                                }
                                            >
                                                <div>
                                                    <Dollar />
                                                </div>
                                                Gifts: <span>0.41 ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.appDashboardInfoContent}>
                                    <div className={styles.appReward}>
                                        <p className={styles.appRewardTitle}>
                                            Available rewards to claim
                                        </p>

                                        <div className={styles.appRewardItem}>
                                            <div
                                                className={
                                                    styles.appRewardItemIcon
                                                }
                                            >
                                                <Eth />
                                            </div>

                                            <p
                                                className={
                                                    styles.appRewardItemText
                                                }
                                            >
                                                0.41 ETH
                                            </p>

                                            <button
                                                className={
                                                    styles.appRewardItemButton
                                                }
                                                onClick={() =>
                                                    setSyncModal(true)
                                                }
                                            >
                                                Claim
                                                <ArrowRight />
                                            </button>
                                        </div>
                                    </div>

                                    <div className={styles.appCollectedInner}>
                                        <div className={styles.appCollected}>
                                            <p
                                                className={
                                                    styles.appRewardTitle
                                                }
                                            >
                                                Total rewards collected
                                            </p>

                                            <div
                                                className={
                                                    styles.appCollectedTable
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.appCollectedTableItem
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.appCollectedTableItemCount
                                                        }
                                                    >
                                                        <span>
                                                            <Eth />
                                                        </span>
                                                        1.2
                                                    </div>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemTime
                                                        }
                                                    >
                                                        7:12 PM
                                                    </p>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemDate
                                                        }
                                                    >
                                                        10.01.2025
                                                    </p>
                                                </div>

                                                <div
                                                    className={
                                                        styles.appCollectedTableItem
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.appCollectedTableItemCount
                                                        }
                                                    >
                                                        <span>
                                                            <Eth />
                                                        </span>
                                                        1.2
                                                    </div>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemTime
                                                        }
                                                    >
                                                        7:12 PM
                                                    </p>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemDate
                                                        }
                                                    >
                                                        10.01.2025
                                                    </p>
                                                </div>

                                                <div
                                                    className={
                                                        styles.appCollectedTableItem
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.appCollectedTableItemCount
                                                        }
                                                    >
                                                        <span>
                                                            <Eth />
                                                        </span>
                                                        1.2
                                                    </div>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemTime
                                                        }
                                                    >
                                                        7:12 PM
                                                    </p>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemDate
                                                        }
                                                    >
                                                        10.01.2025
                                                    </p>
                                                </div>

                                                <div
                                                    className={
                                                        styles.appCollectedTableItem
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.appCollectedTableItemCount
                                                        }
                                                    >
                                                        <span>
                                                            <Eth />
                                                        </span>
                                                        1.2
                                                    </div>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemTime
                                                        }
                                                    >
                                                        7:12 PM
                                                    </p>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemDate
                                                        }
                                                    >
                                                        10.01.2025
                                                    </p>
                                                </div>

                                                <div
                                                    className={
                                                        styles.appCollectedTableItem
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.appCollectedTableItemCount
                                                        }
                                                    >
                                                        <span>
                                                            <Eth />
                                                        </span>
                                                        1.2
                                                    </div>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemTime
                                                        }
                                                    >
                                                        7:12 PM
                                                    </p>

                                                    <p
                                                        className={
                                                            styles.appCollectedTableItemDate
                                                        }
                                                    >
                                                        10.01.2025
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.appLeaderboardInner}>
                                <div className={styles.appLeaderboard}>
                                    <p className={styles.appRewardTitle}>
                                        Leaderboard.
                                    </p>

                                    <div className={styles.appLeaderTable}>
                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>

                                        <div
                                            className={
                                                styles.appLeaderTableItem
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.appLeaderTableItemWallet
                                                }
                                            >
                                                <span>
                                                    <Wallet />
                                                </span>
                                                0x23...34
                                            </div>

                                            <p
                                                className={
                                                    styles.appLeaderTableItemCount
                                                }
                                            >
                                                1.2
                                                <Eth />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.appGetmore}>
                                <Image src="/img/get-bg.png" alt="Bg" fill />

                                <div className={styles.appGetmoreIcon}>
                                    <Fire />
                                </div>

                                <p className={styles.appGetmoreTitle}>
                                    Get more
                                </p>

                                <p className={styles.appGetmoreText}>
                                    Increase your winnings burning tokens
                                </p>

                                <button
                                    className={styles.appGetmoreButton}
                                    onClick={() =>
                                        setUpgradeModal((prev) => !prev)
                                    }
                                >
                                    Upgrade
                                    <span>
                                        <ArrowRight />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.appTable}>
                    <div className={base.container}>
                        <div className={styles.appTableInner}>
                            <div className={styles.appTableHeader}>
                                <p className={styles.appTableHeaderItem}>ID</p>

                                <p className={styles.appTableHeaderItem}>
                                    User
                                </p>

                                <p className={styles.appTableHeaderItem}>
                                    Time
                                </p>

                                <p className={styles.appTableHeaderItem}>
                                    Prize Color
                                </p>

                                <p className={styles.appTableHeaderItem}>
                                    Double
                                </p>

                                <p className={styles.appTableHeaderItem}>
                                    Payout
                                </p>
                            </div>

                            <div className={styles.appTableContentWrap}>
                                <div className={styles.appTableContent}>
                                    <div className={styles.appTableItem}>
                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            134,717,449,937
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={
                                                    styles.appTableItemUserName
                                                }
                                            >
                                                <Blind />
                                                Hidden
                                            </div>
                                        </div>

                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            7:12 PM
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemColor
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemColorCircle,
                                                    styles.blue
                                                )}
                                            ></div>
                                            Blue
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemValueDouble,
                                                    styles.negative
                                                )}
                                            >
                                                No
                                            </div>
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemPay
                                            )}
                                        >
                                            -0.02131
                                            <Eth />
                                        </div>
                                    </div>

                                    <div className={styles.appTableItem}>
                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            134,717,449,937
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={
                                                    styles.appTableItemUserName
                                                }
                                            >
                                                <Blind />
                                                Hidden
                                            </div>
                                        </div>

                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            7:12 PM
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemColor
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemColorCircle,
                                                    styles.blue
                                                )}
                                            ></div>
                                            Blue
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemValueDouble,
                                                    styles.negative
                                                )}
                                            >
                                                No
                                            </div>
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemPay
                                            )}
                                        >
                                            -0.02131
                                            <Eth />
                                        </div>
                                    </div>

                                    <div className={styles.appTableItem}>
                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            134,717,449,937
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={
                                                    styles.appTableItemUserName
                                                }
                                            >
                                                <Blind />
                                                Hidden
                                            </div>
                                        </div>

                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            7:12 PM
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemColor
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemColorCircle,
                                                    styles.blue
                                                )}
                                            ></div>
                                            Blue
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemValueDouble,
                                                    styles.negative
                                                )}
                                            >
                                                No
                                            </div>
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemPay
                                            )}
                                        >
                                            -0.02131
                                            <Eth />
                                        </div>
                                    </div>

                                    <div className={styles.appTableItem}>
                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            134,717,449,937
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={
                                                    styles.appTableItemUserName
                                                }
                                            >
                                                <Blind />
                                                Hidden
                                            </div>
                                        </div>

                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            7:12 PM
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemColor
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemColorCircle,
                                                    styles.blue
                                                )}
                                            ></div>
                                            Blue
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemValueDouble,
                                                    styles.negative
                                                )}
                                            >
                                                No
                                            </div>
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemPay
                                            )}
                                        >
                                            -0.02131
                                            <Eth />
                                        </div>
                                    </div>

                                    <div className={styles.appTableItem}>
                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            134,717,449,937
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={
                                                    styles.appTableItemUserName
                                                }
                                            >
                                                <Blind />
                                                Hidden
                                            </div>
                                        </div>

                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            7:12 PM
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemColor
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemColorCircle,
                                                    styles.blue
                                                )}
                                            ></div>
                                            Blue
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemValueDouble,
                                                    styles.negative
                                                )}
                                            >
                                                No
                                            </div>
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemPay
                                            )}
                                        >
                                            -0.02131
                                            <Eth />
                                        </div>
                                    </div>

                                    <div className={styles.appTableItem}>
                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            134,717,449,937
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={
                                                    styles.appTableItemUserName
                                                }
                                            >
                                                <Blind />
                                                Hidden
                                            </div>
                                        </div>

                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            7:12 PM
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemColor
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemColorCircle,
                                                    styles.blue
                                                )}
                                            ></div>
                                            Blue
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemValueDouble,
                                                    styles.negative
                                                )}
                                            >
                                                No
                                            </div>
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemPay
                                            )}
                                        >
                                            -0.02131
                                            <Eth />
                                        </div>
                                    </div>

                                    <div className={styles.appTableItem}>
                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            134,717,449,937
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={
                                                    styles.appTableItemUserName
                                                }
                                            >
                                                <Blind />
                                                Hidden
                                            </div>
                                        </div>

                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            7:12 PM
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemColor
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemColorCircle,
                                                    styles.blue
                                                )}
                                            ></div>
                                            Blue
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemValueDouble,
                                                    styles.negative
                                                )}
                                            >
                                                No
                                            </div>
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemPay
                                            )}
                                        >
                                            -0.02131
                                            <Eth />
                                        </div>
                                    </div>

                                    <div className={styles.appTableItem}>
                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            134,717,449,937
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={
                                                    styles.appTableItemUserName
                                                }
                                            >
                                                <Blind />
                                                Hidden
                                            </div>
                                        </div>

                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            7:12 PM
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemColor
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemColorCircle,
                                                    styles.blue
                                                )}
                                            ></div>
                                            Blue
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemValueDouble,
                                                    styles.negative
                                                )}
                                            >
                                                No
                                            </div>
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemPay
                                            )}
                                        >
                                            -0.02131
                                            <Eth />
                                        </div>
                                    </div>

                                    <div className={styles.appTableItem}>
                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            134,717,449,937
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={
                                                    styles.appTableItemUserName
                                                }
                                            >
                                                <Blind />
                                                Hidden
                                            </div>
                                        </div>

                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            7:12 PM
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemColor
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemColorCircle,
                                                    styles.blue
                                                )}
                                            ></div>
                                            Blue
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemValueDouble,
                                                    styles.negative
                                                )}
                                            >
                                                No
                                            </div>
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemPay
                                            )}
                                        >
                                            -0.02131
                                            <Eth />
                                        </div>
                                    </div>

                                    <div className={styles.appTableItem}>
                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            134,717,449,937
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={
                                                    styles.appTableItemUserName
                                                }
                                            >
                                                <Blind />
                                                Hidden
                                            </div>
                                        </div>

                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            7:12 PM
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemColor
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemColorCircle,
                                                    styles.green
                                                )}
                                            ></div>
                                            Green
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemValueDouble,
                                                    styles.negative
                                                )}
                                            >
                                                No
                                            </div>
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemPay
                                            )}
                                        >
                                            -0.02131
                                            <Eth />
                                        </div>
                                    </div>

                                    <div className={styles.appTableItem}>
                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            134,717,449,937
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={
                                                    styles.appTableItemUserName
                                                }
                                            >
                                                <Blind />
                                                Hidden
                                            </div>
                                        </div>

                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            7:12 PM
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemColor
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemColorCircle,
                                                    styles.orange
                                                )}
                                            ></div>
                                            Orange
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemValueDouble,
                                                    styles.negative
                                                )}
                                            >
                                                No
                                            </div>
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemPay
                                            )}
                                        >
                                            -0.02131
                                            <Eth />
                                        </div>
                                    </div>

                                    <div className={styles.appTableItem}>
                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            134,717,449,937
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={
                                                    styles.appTableItemUserName
                                                }
                                            >
                                                Mickle
                                            </div>
                                        </div>

                                        <p
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemId
                                            )}
                                        >
                                            7:12 PM
                                        </p>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemColor
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemColorCircle,
                                                    styles.purple
                                                )}
                                            ></div>
                                            Purple
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemUser
                                            )}
                                        >
                                            <div
                                                className={cn(
                                                    styles.appTableItemValueDouble,
                                                    styles.positive
                                                )}
                                            >
                                                Yes
                                            </div>
                                        </div>

                                        <div
                                            className={cn(
                                                styles.appTableItemValue,
                                                styles.appTableItemPay
                                            )}
                                        >
                                            -0.02131
                                            <Eth />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal value={upgradeModal}>
                <div className={styles.upgradeModal}>
                    <button
                        className={styles.upgradeModalClose}
                        onClick={() => setUpgradeModal(false)}
                    >
                        <Close />
                    </button>

                    <p className={styles.upgradeModalText}>
                        In order to change the color prize
                    </p>

                    <p className={styles.upgradeModalTitle}>
                        You must hold <span>ETHXX.</span>
                    </p>

                    <div className={styles.upgradeModalItems}>
                        <div
                            className={cn(
                                styles.upgradeModalItem,
                                styles.green
                            )}
                        >
                            <p className={styles.upgradeModalItemText}>Green</p>

                            <p className={styles.upgradeModalItemValue}>10K</p>

                            <div className={styles.upgradeModalItemCircleInner}>
                                <div
                                    className={styles.upgradeModalItemCircle}
                                ></div>
                            </div>
                        </div>

                        <div
                            className={cn(styles.upgradeModalItem, styles.blue)}
                        >
                            <p className={styles.upgradeModalItemText}>Blue</p>

                            <p className={styles.upgradeModalItemValue}>50K</p>

                            <div className={styles.upgradeModalItemCircleInner}>
                                <div
                                    className={styles.upgradeModalItemCircle}
                                ></div>
                            </div>
                        </div>

                        <div
                            className={cn(
                                styles.upgradeModalItem,
                                styles.purple
                            )}
                        >
                            <p className={styles.upgradeModalItemText}>
                                Purple
                            </p>

                            <p className={styles.upgradeModalItemValue}>250K</p>

                            <div className={styles.upgradeModalItemCircleInner}>
                                <div
                                    className={styles.upgradeModalItemCircle}
                                ></div>
                            </div>
                        </div>

                        <div
                            className={cn(
                                styles.upgradeModalItem,
                                styles.orange
                            )}
                        >
                            <p className={styles.upgradeModalItemText}>
                                Orange
                            </p>

                            <p className={styles.upgradeModalItemValue}>750K</p>

                            <div className={styles.upgradeModalItemCircleInner}>
                                <div
                                    className={styles.upgradeModalItemCircle}
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.upgradeModalHr}></div>

                    <p className={styles.upgradeModalText}>
                        5 hidden prizes per day
                    </p>

                    <p className={styles.upgradeModalTitle}>
                        Burn <span>ETHXX.</span>
                    </p>

                    <div className={styles.upgradeBurnItems}>
                        <div className={styles.upgradeBurnItem}>
                            <p className={styles.upgradeBurnItemPoint}>+5</p>

                            <p className={styles.upgradeBurnItemText}>
                                Hidden Prizes
                            </p>

                            <p className={styles.upgradeBurnItemTitle}>
                                15K <span>ETHXX</span>
                            </p>

                            <button className={styles.upgradeBurnItemButton}>
                                Burn
                                <Fire />
                            </button>
                        </div>

                        <div className={styles.upgradeBurnItem}>
                            <p className={styles.upgradeBurnItemPoint}>+10</p>

                            <p className={styles.upgradeBurnItemText}>
                                Hidden Prizes
                            </p>

                            <p className={styles.upgradeBurnItemTitle}>
                                25K <span>ETHXX</span>
                            </p>

                            <button className={styles.upgradeBurnItemButton}>
                                Burn
                                <Fire />
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal value={syncModal}>
                <div className={styles.upgradeModal}>
                    <button
                        className={styles.upgradeModalClose}
                        onClick={() => setSyncModal(false)}
                    >
                        <Close />
                    </button>

                    <div className={styles.clientIcon}>
                        <Image
                            src="/img/client.svg"
                            alt="client"
                            width={31}
                            height={31}
                        />
                    </div>

                    <p className={styles.clientTitle}>Add your Client ID</p>

                    <p className={styles.clientText}>
                        Before you continue to your dashboard please sync your
                        browser extension si the app.
                    </p>

                    <div className={styles.clientId}>
                        6383839hgT
                        <button className={styles.clientIdCopy}>
                            <Copy />
                            Copy ID
                        </button>
                    </div>

                    <button className={styles.clientButton}>
                        Syncronize App
                        <Change />
                    </button>
                </div>
            </Modal>

            <Modal value={connectModal}>
                <div className={styles.connectModal}>
                    <button
                        className={styles.upgradeModalClose}
                        onClick={() => setConnectModal(false)}
                    >
                        <Close />
                    </button>

                    <p className={styles.connectTitle}>Connect Wallet</p>

                    <p className={styles.connectText}>
                        Get started by connecting your preferred wallet below
                    </p>

                    <div className={styles.connectChoice}>
                        <p>or select a wallet from the list below</p>
                    </div>

                    <div className={styles.connectItems}>
                        <button className={styles.connectItem}>
                            <span>
                                <Image
                                    src="/img/metamask.png"
                                    alt="metamask"
                                    width={36}
                                    height={36}
                                />
                                MetaMask
                            </span>

                            <ArrowRight />
                        </button>

                        <button className={styles.connectItem}>
                            <span>
                                <Image
                                    src="/img/phantom.png"
                                    alt="phantom"
                                    width={36}
                                    height={36}
                                />
                                Phantom
                            </span>

                            <ArrowRight />
                        </button>

                        <button className={styles.connectItem}>
                            <span>
                                <Image
                                    src="/img/coinbase.png"
                                    alt="coinbase"
                                    width={36}
                                    height={36}
                                />
                                Coinbase Wallet
                            </span>

                            <ArrowRight />
                        </button>

                        <button className={styles.connectItem}>
                            <span>
                                <Image
                                    src="/img/wallet.png"
                                    alt="wallet"
                                    width={36}
                                    height={36}
                                />
                                WalletConnect
                            </span>

                            <ArrowRight />
                        </button>
                    </div>

                    <button className={styles.connectButton}>
                        <Wallet2 />I don’t have a wallet
                    </button>
                </div>
            </Modal>
        </>
    );
}
