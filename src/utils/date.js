import dayjs from "dayjs";
import jalaliday from "jalaliday";

const date = targetDate => dayjs(targetDate).calendar("jalali").locale("fa");

export default date;
