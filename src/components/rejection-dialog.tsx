"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RejectionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onReject: (reason: string) => void;
}

const commonRejectionReasons = [
  "Poor audio quality",
  "Inappropriate content",
  "Violation of terms of service",
  "Incomplete submission information",
  "Duplicate submission",
];

export function RejectionDialog({
  open,
  onOpenChange,
  onReject,
}: RejectionDialogProps) {
  const [reason, setReason] = useState("");
  const [selectedReason, setSelectedReason] = useState("");

  useEffect(() => {
    if (!open) {
      setReason("");
      setSelectedReason("");
    }
  }, [open]);

  const handleSelectChange = (value: string) => {
    if (value === "custom") {
      setSelectedReason(value);
      setReason("");
    } else {
      setSelectedReason(value);
      setReason(value);
    }
  };

  const handleSubmit = () => {
    if (reason.trim()) {
      onReject(reason.trim());
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reject Submission</DialogTitle>
          <DialogDescription>
            Provide a reason for rejecting this podcast. This may be shared with
            the submitter.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="common-reasons">Common Reasons</Label>
            <Select onValueChange={handleSelectChange} value={selectedReason}>
              <SelectTrigger id="common-reasons">
                <SelectValue placeholder="Select a common reason..." />
              </SelectTrigger>
              <SelectContent>
                {commonRejectionReasons.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
                <SelectItem value="custom">Custom reason...</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="rejection-reason">Rejection Reason</Label>
            <Textarea
              id="rejection-reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Type your reason here..."
              rows={4}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleSubmit}
            disabled={!reason.trim()}
          >
            Confirm Rejection
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
