#!/bin/bash
# My first script

echo "REVSTUDIO BUILD SCRIPT"
echo "See your page on http://localhost:4000/"

command -v jekyll >/dev/null 2>&1 || {
	echo >&2 "Jekyll not found, installing jekyll.";
	gem install jekyll
}

open "http://localhost:4000/"
jekyll serve
