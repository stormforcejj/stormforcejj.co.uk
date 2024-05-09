export default function handler(req, res) {
  // let params = req.url;
  // console.log(params);
  // console.log(
  //   "mumble://" +
  //     params.username +
  //     ":" +
  //     params.password +
  //     "@mumble.stormforcejj.co.uk:64738/?version=1.3.0&title=Eviction%20Inc&url=mumble.stormforcejj.co.uk"
  // );
  const { searchParams } = new URL("http://localhost:3000"+req.url);
  res.redirect(
    307,
    "mumble://" +
      searchParams.get("username") +
      ":" +
      searchParams.get("password") +
      "@mumble.stormforcejj.co.uk:64738/?version=1.3.0&title=Eviction%20Inc&url=mumble.stormforcejj.co.uk"
  );
}
