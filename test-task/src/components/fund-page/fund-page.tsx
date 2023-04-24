import { FC } from "react";
import { FundFirstChart } from "../fund-first-chart/fund-first-chart";
import { FundSecondChart } from "../fund-second-chart/fund-second-chart";

const FundPage: FC =() => {
    return (
        <div>
            <FundFirstChart/>
            <FundSecondChart/>
        </div>
    )
}

export {FundPage}