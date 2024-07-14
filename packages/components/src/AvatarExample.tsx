import { AvatarContainer, AvatarSlot } from "./Avatar.primitives";
import { generateImageUrl } from "./generateImageUrls";

export function AvatarExample({
  showFrame = false,
  large = false,
}: {
  showFrame?: boolean;
  large?: boolean;
}) {
  const avatarSlot = (
    <AvatarSlot large={large}>
      <img src={generateImageUrl("/profile-pic.jpeg")} alt="profile-picture" />
    </AvatarSlot>
  );

  if (showFrame) {
    return <AvatarContainer>{avatarSlot}</AvatarContainer>;
  }

  return avatarSlot;
}
