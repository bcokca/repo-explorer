import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Organization from "./Org";

function OrgsPage() {
  const history = useHistory();
  const { orgName } = useParams();
  return <Organization orgName={orgName} history={history} />;
}

export default OrgsPage;
