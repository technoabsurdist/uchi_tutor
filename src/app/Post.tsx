import { Input, Textarea, Button } from "@nextui-org/react";

export default function Post() {
    return (
        <div className="flex flex-col w-[700px] gap-5">
            <Input type="text" placeholder="Topic" className="bg-slate-100 rounded"/>
            <Input type="text" placeholder="Title" className="bg-slate-100 rounded" />
            <Textarea placeholder="Content" className="bg-slate-100 rounded" />
            <Button color="primary" variant="shadow" className="p-2 bg-slate-200 rounded">
                Submit
            </Button> 
        </div>
    )
}

