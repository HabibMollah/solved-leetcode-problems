# Read from the file file.txt and output the tenth line to stdout.
i=1
cat file.txt | while IFS="\n" read LINE
    do
        if [[ $i -eq 10 ]]
        then
            echo $LINE
        fi
        (( i++ ))     
    done
