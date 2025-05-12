import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
    return <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
        <div className='text-4xl text-center font-semibold text-mine-shaft-100'>Want to Stay
            <span className='text-bright-sun-400'> Updated </span>on Job Openings?
        </div>
        <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
            <TextInput
            variant="unstyled"
            className="[&_input]:text-mine-shaft-100 font-semibold"
            placeholder="Your@email.com"
            size="xl"
        />
            <Button className="!rounded-lg" size="lg" color="brightSun.4" variant="filled">Subscribe</Button>
        </div>

    </div>
}
export default Subscribe;