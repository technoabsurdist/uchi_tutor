import {Input} from "@nextui-org/react";

export default function Post() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <Input type="email" label="Email" placeholder="Enter your email" />
                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                    {""}
                </div>
            </div>
        </div>
    );
}