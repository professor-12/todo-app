import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";

function RandomAvatarGenerator() {
    const avatar = useMemo(() => {
        return createAvatar(lorelei, {
            size: 128,
            // ... other options
        }).toDataUriSync();
    }, []);

    return avatar;
}

export default RandomAvatarGenerator;
