"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ServiceFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function ServiceForm({
  onSuccess,
  onCancel,
}: ServiceFormProps) {
  const createService = useMutation(api.services.createService);

  const [title, setTitle] = useState("");
  const [altText, setAltText] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!title.trim() || !altText.trim() || !description.trim()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await createService({
        title: title.trim(),
        altText: altText.trim(),
        description: description
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean),
      });

      setTitle("");
      setAltText("");
      setDescription("");

      onSuccess?.();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <Label className="mb-2 block text-sm font-medium text-primary">
          Service Title
        </Label>

        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-11 rounded-2xl border-border bg-background"
          placeholder="UK Market Entry & Business Establishment"
        />
      </div>

      <div>
        <Label className="mb-2 block text-sm font-medium text-primary">
          Alt Text
        </Label>

        <Input
          value={altText}
          onChange={(e) => setAltText(e.target.value)}
          className="h-11 rounded-2xl border-border bg-background"
          placeholder="Service thumbnail"
        />
      </div>

      <div>
        <Label className="mb-2 block text-sm font-medium text-primary">
          Description
        </Label>

        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
          className="rounded-2xl border-border bg-background"
          placeholder="Add one paragraph per line"
        />
      </div>

      <div>
        <Label className="mb-2 block text-sm font-medium text-primary">
          Thumbnail
        </Label>

        <input
          type="file"
          className="block text-sm text-muted-foreground file:mr-4 file:rounded-2xl file:border file:border-border file:bg-background file:px-4 file:py-2 file:text-sm file:text-foreground"
          disabled
        />

        <p className="mt-2 text-xs text-muted-foreground">
          File upload wiring can be connected to Convex storage in the next step.
        </p>
      </div>

      <div className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          className="rounded-2xl"
          onClick={onCancel}
        >
          Cancel
        </Button>

        <Button
          type="submit"
          className="rounded-2xl"
          disabled={isSubmitting}
        >
          Save Service
        </Button>
      </div>
    </form>
  );
}