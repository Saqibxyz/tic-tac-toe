import { Button } from "@nextui-org/button";
const reloadPage = () => {
    window.location.reload();
};

const ReloadButton = () => {
    return (
        <div className="text-blue-200 ">
            <Button color="primary" className="text-blue-200" variant="bordered" onClick={reloadPage}>New Game</Button>
        </div>
    )
}

export default ReloadButton