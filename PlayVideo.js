/**
 * Created by BALASUBRAMANIAM on 31-12-2014.
 */

function PlaySrc(file,img)
{
  videoref=document.getElementById("picvideo");
  videoref.poster=img;
  videoref.src=file;

}
function Playfile()
{
  videoref.play();
}
function Pausefile()
{
  videoref.pause();
}
function Mutefile()
{
  videoref.muted=true;
}
function UnMutefile()
{
  videoref.muted=false;
}
function PlusVolume()
{

  videoref.volume= videoref.volume+1;

}
function MinusVolume()
{

  videoref.volume=videoref.volume-1;

}
