import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Input from '@mui/joy/Input';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
        'Backend',
        'Frontend',
        'Fullstack',
        'IOS',
        'Flutter',
        'React Native',
        'Android',
        'Tech Lead',
        'Dev-Ops',
        'Data Engineer',
        'Data Science',
        'Computer-Vision',
        'NLP',
        'Deep Learning',
        'Test/QA',
        'Web3',
        'SRE',
        'Data Infrastructure',
        'Designer',
        'Design Manager',
        'Graphic Designer',
        'Product Designer',
        'Product Manager',
        'Operations Manager',
        'Founders Office/Chief of Staff',
        'Sales Development Representative',
        'Account Executive',
        'Account Manager',
        'Digital Marketing Manager',
        'Growth Hacker',
        'Marketing',
        'Product Marketing Manager',
        'Hardware',
        'Mechanical',
        'Systems',
        'Business Analytics',
        'Data Analytics',
        'Project Manager',
        'Management',
        'Legal',
        'HR',
        'Finance'
];

const employees = [
    '1-10',
    '11-20',
    '21-50',
    '51-100',
    '101-200',
    '201-500',
    '500+'
];

const experience=[
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
]


const remote = [
    'Remote',
    'Hybrid',
    'In-office'
]

const salary = [
    '0L',
    '10L',
    '20L',
    '30L',
    '40L',
    '50L',
    '60L',
    '70L',
]


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function getEmployee(employee, employeeNumber, theme) {
  return {
    fontWeight:
      employeeNumber.indexOf(employee) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function getExperience(experiences, experienceYears, theme) {
  return {
    fontWeight:
      experienceYears.indexOf(experiences) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function getWorkType(remotes, workType, theme) {
  return {
    fontWeight:
      workType.indexOf(remotes) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function getSalary(salar, salaryRange, theme) {
  return {
    fontWeight:
      salaryRange.indexOf(salar) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Filter() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [employeeNumber, setEmployeeNumber] = React.useState([]);
  const [experienceYears, setExperienceYears] = React.useState([]);
  const [workType, setWorkType] = React.useState([]);
  const [salaryRange, setSalaryRange] = React.useState([]);



  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleEmployee = (event) => {
    const {
      target: { value },
    } = event;
    setEmployeeNumber(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleExperience = (event) => {
    const {
      target: { value },
    } = event;
    setExperienceYears(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleWorkType = (event) => {
    const {
      target: { value },
    } = event;
    setWorkType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleSalary = (event) => {
    const {
      target: { value },
    } = event;
    setSalaryRange(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
    
      <FormControl sx={{ m: 1, width: 200}}>
        <InputLabel id="demo-multiple-chip-label">Roles</InputLabel>
        <Select
        sx={{height:50}}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Roles" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 250 }}>
        <InputLabel id="demo-multiple-chip-label">Number of Employees</InputLabel>
        <Select
        sx={{height:50}}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={employeeNumber}
          onChange={handleEmployee}
          input={<OutlinedInput id="select-multiple-chip" label="No of employees" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {employees.map((employee) => (
            <MenuItem
              key={employee}
              value={employee}
              style={getEmployee(employee, employeeNumber, theme)}
            >
              {employee}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="demo-multiple-chip-label">Experience</InputLabel>
        <Select
        sx={{height: 50}}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={experienceYears}
          onChange={handleExperience}
          input={<OutlinedInput id="select-multiple-chip" label="Experience" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {experience.map((experiences) => (
            <MenuItem
              key={experiences}
              value={experiences}
              style={getExperience(experiences, experienceYears, theme)}
            >
              {experiences}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 150 }}>
        <InputLabel id="demo-multiple-chip-label">Remote</InputLabel>
        <Select
        sx={{height:50}}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={workType}
          onChange={handleWorkType}
          input={<OutlinedInput id="select-multiple-chip" label="Remote" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {remote.map((remotes) => (
            <MenuItem
              key={remotes}
              value={remotes}
              style={getWorkType(remotes, workType, theme)}
            >
              {remotes}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width:300, height:45 }}>
        <InputLabel id="demo-multiple-chip-label">Minimum Base Pay Salary</InputLabel>
        <Select
        sx={{height:50}}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={salaryRange}
          onChange={handleSalary}
          input={<OutlinedInput id="select-multiple-chip" label="Salary" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {salary.map((salar) => (
            <MenuItem
              key={salar}
              value={salar}
              style={getSalary(salar, salaryRange, theme)}
            >
              {salar}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, width: 200, height:100 }}>
      <Input sx={{height:45}} placeholder="Search Company Name" />
      </FormControl>
    </div>
  );
}
