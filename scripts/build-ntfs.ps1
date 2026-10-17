# Next.js production build can fail on exFAT volumes (readlink EISDIR).
# This script copies the project to %LOCALAPPDATA% (NTFS), builds, and copies .next back.

$Source = Resolve-Path (Join-Path $PSScriptRoot "..")

$Staging = Join-Path $env:LOCALAPPDATA "LyThanhLoi_Porfolio_build"
Write-Host "Staging build at $Staging"

Remove-Item -Recurse -Force $Staging -ErrorAction SilentlyContinue
robocopy $Source $Staging /E /XD node_modules .next .git /NFL /NDL /NJH /NJS /nc /ns /np | Out-Null

Push-Location $Staging
npm install
npm run build
Pop-Location

if (Test-Path "$Staging\.next") {
  Remove-Item -Recurse -Force "$Source\.next" -ErrorAction SilentlyContinue
  robocopy "$Staging\.next" "$Source\.next" /E /NFL /NDL /NJH /NJS /nc /ns /np | Out-Null
  Write-Host "Build output copied to $Source\.next"
}
