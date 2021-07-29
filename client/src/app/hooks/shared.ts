export function typeGuard(runType: any, data: any): boolean {
  if (data) {
    try {
      runType.check(data);
      return true;
    } catch (err) {
      console.log("Wrong type. Is: ", data, err);
    }
  }
  return false;
}
