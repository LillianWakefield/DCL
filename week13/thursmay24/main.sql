/*SELECT project_id FROM project_uses_tech 
WHERE tech_id = 1;
SELECT tech_id FROM project_uses_tech 
WHERE project_id = 4;
SELECT project_uses_tech.project_id, count(tech.name) 
FROM tech 
LEFT OUTER JOIN project_uses_tech ON tech.id = project_uses_tech.tech_id
GROUP BY project_uses_tech.project_id;

SELECT project_uses_tech.tech_id, COUNT(project.name) 
FROM project 
LEFT OUTER JOIN project_uses_tech ON project.id = project_uses_tech.project_id
GROUP BY project_uses_tech.tech_id;
SELECT * FROM 
project_uses_tech LEFT OUTER JOIN tech 
ON project_uses_tech.tech_id = tech.id*/
--Q7
