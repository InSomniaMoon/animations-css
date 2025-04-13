import json
with open("cleaned_data.json", "r") as file:
    data = file.read()
    # file is a json file
    data = json.loads(data)

    # tranform it
    for line in data:
        stats = line['stats']
        transformed_stats = []

        for i in range(0, len(stats), 2):
            stat = {
                "label": stats[i + 1]['value'],
                "value": stats[i]['value']
            }
            transformed_stats.append(stat)
        line['stats'] = transformed_stats

        # print(line["mapAndPhotos"]['activityMap'])
        if line["mapAndPhotos"]['activityMap'] is not None:
            line['image'] = line['mapAndPhotos']['activityMap']['url']

        del line['mapAndPhotos']


    # filter out lines where there is no image key
    data = [line for line in data if 'image' in line]
    # only take the 5 first lines
    data = data[:5]
    with open("src/transformed_data.json", "w") as file:
        file.write(json.dumps(data))
