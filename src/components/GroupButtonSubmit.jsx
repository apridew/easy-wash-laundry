import { Button } from "@nextui-org/react"

const GroupButtonSubmit = ({ handleSubmit, handleCancel, isDisabled, title }) => {
  return (
    <div className="w-full space-x-4 border-t-1 pt-6 tracking-wider">
    <Button
      radius="sm"
      variant="ghost"
      color="danger"
      onClick={handleCancel}
    >
      CANCEL
    </Button>
    <Button
      onClick={handleSubmit}
      radius="sm"
      color="primary"
      isDisabled={isDisabled}
    >
      {title}
    </Button>
  </div>
  )
}

export default GroupButtonSubmit