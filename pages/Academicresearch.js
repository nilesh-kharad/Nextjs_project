import Filterby from './reportFilterby'
import Graphs from './graphs'
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import ResearchTable from './researchTable';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios"
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { storage } from './firebase';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import file from '@babel/core/lib/transformation/file/file';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Academicresearch = () => {
  const [allFileurls, setAllfileurls] = React.useState('');


  const [open, setOpen] = React.useState(false);

  const [age, setAge] = React.useState('');

  const handleResearchtype = (event) => {
    setAge(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const [Research, setResearch] = React.useState('');
  const [openResearch, setOpenResearch] = React.useState(false);
  const [openUniversity, setOpenUniversity] = React.useState(false);

  const [Sponsored, setSponsor] = React.useState('');
  const [openSponsored, setOpenSponsor] = React.useState(false);

  //Research type
  const handleResearchChange = (event) => {
    setResearch(event.target.value);
  };

  const handleResearchClose = () => {
    setOpenResearch(false);
  };

  const handleResearchOpen = () => {
    setOpenResearch(true);
  };

  //sponsors handle
  const handleSponsored = (event) => {
    setSponsor(event.target.value);
  };
  const handleSponsorOpen = () => {
    setOpenSponsor(true);
  };
  const handleSponsorClose = () => {
    setOpenSponsor(false);
  };


  const [paperTitle, setPaperTitle] = React.useState('');
  const handlePaperTitle = (event) => {
    setPaperTitle(event.target.value);
  };

  const [authorName, setAuthorName] = React.useState('');
  const handleAuthorName = (event) => {
    setAuthorName(event.target.value);
  };

  const [deptTeachers, setDeptTeachers] = React.useState('');
  const handleDeptTeachers = (event) => {
    setDeptTeachers(event.target.value);
  };

  const [author, setAuthor] = React.useState('');
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const [publishedDate, setPublishedDate] = React.useState(new Date());

  const handlePublishedDate = (event) => {
    setPublishedDate(event.getFullYear())
  };
  const [citations, setCitations] = React.useState('');
  const handleCitations = (event) => {
    setCitations(event.target.value);
  };
  const [paperUrl, setPaperUrl] = React.useState('');
  const handlePaperUrl = async (event) => {
    await uploadFiles(event.target.files[0])
    setPaperUrl(allFileurls)
    setTimeout(console.log("Paper url is here", paperUrl), 5000)

    
  };
  const [indexing, setIndexing] = React.useState('');
  const handleIndexing = (event) => {
    setIndexing(event.target.value);
  };
  const [journalName, setJournalName] = React.useState('');
  const handleJournalName = (event) => {
    setJournalName(event.target.value);
  };
  const [sponsorshipLetterUrl, setSponsorshipLetterUrl] = React.useState('');
  const handleSponsorshipLetterUrl = (event) => {
    setSponsorshipLetterUrl(event.target.value);
  };
  const [copyright, setCopyright] = React.useState('');
  const [openCopyright, setOpenCopyright] = React.useState(false);

  const handleCopyright = (event) => {
    setCopyright(event.target.value);

  };

  const handleCopyrightOpen = () => {
    setOpenCopyright(true);
  };
  const handleCopyrightClose = () => {
    setOpenCopyright(false);
  };

  const [copyrighturl, setCopyrighturl] = React.useState('');
  const handleCopyrighturl = (event) => {
    setCopyrighturl(event.target.value);
  };

  let data = {}
  const baseURL = "http://localhost:4001/api/addResearch";
  const [post, setPost] = React.useState(null);

  const handlesubmitAddReport = async (e) => {
    e.preventDefault();
    data = {
      researchType: Research,
      paperTitle: paperTitle,
      authorName: authorName,
      deptTeachers: deptTeachers,
      author: author,
      publishedDate: publishedDate,
      citations: citations,
      paperUrl: paperUrl,
      indexing: indexing,
      journalName: journalName,
      sponsored: Sponsored,
      sponsorshipLetterUrl: sponsorshipLetterUrl,
      copyright: copyright,
      copyrighturl: copyrighturl,
    }


    axios.post(baseURL, data)
      .then((response) => {
      }).catch(
        err => {
          console.error(err)
        }
      );
    setOpen(false);

  }
  const [progress, setProgress] = React.useState(0)

  const uploadFiles = (file) => {

    if (!file) return;

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(prog);
    }, (err) => {
      console.log(err)
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then(fileurl => {
          setAllfileurls(fileurl)

        }
        )
    }
    );
    console.log("uploaded progress", progress)
  };
  return (
    <>
      <div className="contentbody">
        <div className='btnRow' >
          <Button variant="contained" sx={{ m: 1 }} color="error">Generate Report</Button>
          <Button variant="outlined" sx={{ m: 1 }} onClick={handleClickOpen}  >Add Research</Button>
        </div>
        <FormControl sx={{ m: 1, width: 100 }} className='addResearchdialogue'>
          <Dialog sx={{ m: 1, width: 100 }} className='addResearchdialogue' open={open} onClose={handleClose}>
            <DialogTitle>Add new Research</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Grid>
                  <Grid item>
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                      <InputLabel id="demo-controlled-open-select-label">Research Type</InputLabel>
                      <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={openResearch} onClose={handleResearchClose} onOpen={handleResearchOpen} value={Research} placeholder="Research Type" onChange={handleResearchChange}>
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={'IT'}>IT</MenuItem>
                        <MenuItem value={'Computer'}>Computer</MenuItem>
                        <MenuItem value={'Civil'}>Civil</MenuItem>
                        <MenuItem value={'Electronics'}>Electronics</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField sx={{ m: 1 }} id="outlined-basic" required fullWidth value={paperTitle} onInput={handlePaperTitle} label="Paper title" variant="outlined" />
                  </Grid>
                  <DialogTitle>Author details</DialogTitle>
                  <Grid item >
                    <TextField sx={{ m: 1 }} id="outlined-basic" label="Author name" value={authorName} onInput={handleAuthorName} variant="outlined" />
                    <TextField sx={{ m: 1 }} id="outlined-basic" label="Department teachers" value={deptTeachers} onInput={handleDeptTeachers} variant="outlined" />
                  </Grid>

                  <Grid item >
                    <TextField sx={{ m: 1 }} id="outlined-basic" fullWidth label=" Authors" onInput={handleAuthor} value={author} variant="outlined" />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker disableFuture label="Published Year" openTo="year" views={['year']} value={publishedDate} onChange={handlePublishedDate} renderInput={(params) => <TextField {...params} />} />
                    </LocalizationProvider>
                  </Grid>

                  <Grid item >
                    <TextField sx={{ m: 1 }} id="outlined-basic" fullWidth label=" Citations" onInput={handleCitations} value={citations} variant="outlined" />
                    <label htmlFor="upload-photo">
                      <TextField sx={{ m: 1 }} style={{ display: 'none' }} id="upload-photo" type="file" onChange={handlePaperUrl} />
                      <Button color="error" variant="outlined" sx={{ m: 1 }} component="span">
                        Upload Paper
                      </Button>
                    </label>
                  </Grid>
                  <Grid item >
                    <TextField sx={{ m: 1 }} id="outlined-basic" type="number" label="Indexing" onInput={handleIndexing} value={indexing} variant="outlined" />
                    <TextField sx={{ m: 1 }} id="outlined-basic" label="Journal Name" onInput={handleJournalName} value={journalName} variant="outlined" />
                  </Grid>
                  <Grid item >
                    {/* <TextField sx={{ m: 1 }} id="outlined-basic" label="is This research sponsored..?" onInput={handleSponsored} value={sponsored} variant="outlined" /> */}
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                      <InputLabel id="demo-controlled-open-select-label">Is This research sponsored..?</InputLabel>
                      <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={openSponsored} onClose={handleSponsorClose} onOpen={handleSponsorOpen} value={Sponsored} onChange={handleSponsored}>
                        <MenuItem value={'Yes'}>Yes</MenuItem>
                        <MenuItem value={'No'}>No</MenuItem>
                      </Select>
                    </FormControl>
                    <label htmlFor="upload-photo">
                      <TextField sx={{ m: 1 }} style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" onInput={handleSponsorshipLetterUrl} value={sponsorshipLetterUrl} />
                      <Button color="error" variant="outlined" sx={{ m: 1 }} component="span">
                        Upload Sponsorship Letter
                      </Button>
                    </label>
                  </Grid>
                  <Grid item >
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                      <InputLabel id="demo-controlled-open-select-label">Is This research sponsored..?</InputLabel>
                      <Select labelId="demo-controlled-open-select-label" id="demo-controlled-open-select" open={openCopyright} onClose={handleCopyrightClose} onOpen={handleCopyrightOpen} value={copyright} onChange={handleCopyright}>
                        <MenuItem value={'Yes'}>Yes</MenuItem>
                        <MenuItem value={'No'}>No</MenuItem>
                      </Select>
                    </FormControl>
                    <label htmlFor="upload-photo">
                      <TextField sx={{ m: 1 }} style={{ display: 'none' }} id="upload-photo" name="upload-photo" type="file" onInput={handleCopyrighturl} value={copyrighturl} />
                      <Button color="error" variant="outlined" sx={{ m: 1 }} component="span">
                        Upload Copyright
                      </Button>
                    </label>
                  </Grid>
                </Grid>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handlesubmitAddReport}>Save</Button>
            </DialogActions>
          </Dialog>
        </FormControl>
        <Filterby />
        <Graphs />
        <ResearchTable />
      </div>
    </>
  )
}

export default Academicresearch