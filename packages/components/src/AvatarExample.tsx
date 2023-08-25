import { AvatarContainer, AvatarSlot } from "./Avatar.primitives";

export function AvatarExample({
  showFrame = false,
  large = false,
}: {
  showFrame?: boolean;
  large?: boolean;
}) {
  const avatarSlot = (
    <AvatarSlot large={large}>
      <img src="https://github.com/sookmax.png" alt="profile-picture" />
    </AvatarSlot>
  );

  if (showFrame) {
    return <AvatarContainer>{avatarSlot}</AvatarContainer>;
  }

  return avatarSlot;
}
