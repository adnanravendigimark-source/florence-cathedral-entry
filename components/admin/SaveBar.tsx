"use client";

// A save-button bar pinned to the bottom of the browser window (not just
// the form) so the primary action is always reachable without scrolling
// down through a long form. Offsets past the admin sidebar's width on
// desktop — see AdminShell.tsx for the sidebar itself. Every form that uses
// this should give its content wrapper some bottom padding (e.g. `pb-24`)
// so the last field is never hidden behind the bar.
export default function SaveBar({
  saving,
  disabled = false,
  label = "Save Changes",
  savingLabel = "Saving…",
  onCancel,
  cancelLabel = "Cancel",
  note,
}: {
  saving: boolean;
  disabled?: boolean;
  label?: string;
  savingLabel?: string;
  onCancel?: () => void;
  cancelLabel?: string;
  note?: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-stone-200 bg-white/95 px-4 py-3 backdrop-blur sm:pl-64">
      <div className="flex flex-wrap items-center justify-between gap-3 sm:px-4">
        <p className="text-xs text-stone-500">{note}</p>
        <div className="flex items-center gap-3">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg border border-stone-300 bg-white px-5 py-2.5 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
            >
              {cancelLabel}
            </button>
          )}
          <button
            type="submit"
            disabled={saving || disabled}
            className="rounded-lg bg-canal-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-canal-primary/90 disabled:opacity-60"
          >
            {saving ? savingLabel : label}
          </button>
        </div>
      </div>
    </div>
  );
}
