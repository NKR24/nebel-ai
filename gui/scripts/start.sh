#!/bin/bash

# Define a function to handle SIGINT (Ctrl+C)
handle_sigint() {
    echo "Script interrupted, exiting."
    exit 0  # Exit the script with a 0 status
}

# Trap SIGINT and call the handle_sigint function
trap handle_sigint SIGINT

while true; do
  vinxi dev

  status=$?
  if [ $status -eq 0 ]; then
    echo "vinxi dev stopped normally, exiting the loop." >&2
    break
  else
    echo "vinxi dev crashed with exit code $status. Respawning.." >&2
    sleep 1
  fi
done
