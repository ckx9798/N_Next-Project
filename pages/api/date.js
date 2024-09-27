export default function date(요청, 응답) {
  let currentdate = new Date();
  return 응답.status(200).json(currentdate);
}
