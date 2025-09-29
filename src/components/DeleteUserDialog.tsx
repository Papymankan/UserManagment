import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/Dialog";
import { Button } from "./ui/Button";

interface DeleteUserDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteUserDialog({
  open,
  onClose,
  onConfirm,
}: DeleteUserDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete User</DialogTitle>
        </DialogHeader>
        <p>Are you sure you want to delete this user?</p>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="hover:!opacity-75">
            Cancel
          </Button>
          <Button
            className="bg-red-500 text-white hover:opacity-75"
            variant="destructive"
            onClick={onConfirm}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
