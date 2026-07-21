import { BuildingIcon } from "./building-icon";
import { CardIcon } from "./card-icon";
import { HouseIcon } from "./house-icon";
import { KeyIcon } from "./key-icon";

import type { IconName } from "../data";

export function AccessIcon(props: { name: IconName }) {
  if (props.name === "house") {
    return <HouseIcon />;
  }

  if (props.name === "card") {
    return <CardIcon />;
  }

  if (props.name === "key") {
    return <KeyIcon />;
  }

  return <BuildingIcon />;
}
