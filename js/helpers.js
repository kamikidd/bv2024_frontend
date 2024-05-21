export function projectIdFetching(src, name) {
  let id = src.filter((s) => {
    return s.name == name;
  });
  return id;
}
export function getTopicId(src, name) {
  let id = src.filter((s) => {
    return s.title.rendered == name;
  });
  if (id.length != 0) {
    return id[0].topic[0];
  } else {
    return null;
  }
}
export function getServiceId(src, name) {
  let id = src.filter((s) => {
    return s.title.rendered == name;
  });
  if (id.length != 0) {
    return id[0].service[0];
  } else {
    return null;
  }
}

export function getistLaufendId(src, name) {
  let id = src.filter((s) => {
    return s.name == name;
  });
  if (id.length != 0) {
    return id[0].id;
  } else {
    return null;
  }
}
export function filteredData(
  topics,
  services,
  filteredItems,
  projects,
  selected_service,
  selected_topic,
  titleName
) {
  let filteredProjects = projects;
  // Filtering Input Items
  if (titleName) {
    filteredProjects = filteredItems;
  }

  // Applying selected filter
  if (selected_service || selected_topic) {
    let topicid = null;
    let serviceid = null;

    if (selected_topic && selected_service) {
      topicid = getTopicId(topics.data, selected_topic);
      serviceid = getServiceId(services.data, selected_service);

      filteredProjects = filteredProjects.filter((project) => {
        return (
          project.topic.includes(topicid) == true &&
          project.service.includes(serviceid) == true
        );
      });
    } else if (selected_topic) {
      topicid = getTopicId(topics.data, selected_topic);

      filteredProjects = filteredProjects.filter((project) => {
        return project.topic.includes(topicid) == true;
      });
    } else if (selected_service) {
      serviceid = getServiceId(services.data, selected_service);
      filteredProjects = filteredProjects.filter((project) => {
        return project.service.includes(serviceid) == true;
      });
    }
  }

  return filteredProjects;
}

export function filterIstLaufendProjects(projects, istlaufend) {
  let filteredProjects = projects;
  let laufendId = getistLaufendId(istlaufend.data, "Ja");
  filteredProjects = filteredProjects.filter((project) => {
    return project.istlaufend.includes(laufendId) == true;
  });
  return filteredProjects;
}

export function deUmlaut(value) {
  const pattern = /[^a-z0-9éèäöüß]+/g;
  value = value.toLowerCase();
  value = value.replace(pattern, "-");
  value = value.replace(/éè/g, "e");
  value = value.replace(/ä/g, "ae");
  value = value.replace(/ö/g, "oe");
  value = value.replace(/ü/g, "ue");
  value = value.replace(/ß/g, "ss");
  return value;
}