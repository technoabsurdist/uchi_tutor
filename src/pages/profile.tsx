import { UserProfile } from "@clerk/nextjs";

export default function Profile() {
    return (
        <div>
            <UserProfile path="/user-profile" routing="path" />
        </div>
    );
}